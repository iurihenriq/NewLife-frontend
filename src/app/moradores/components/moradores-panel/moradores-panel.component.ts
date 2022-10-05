import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime } from 'rxjs';
import { DialogComponent } from 'src/app/shared/dialog-confirmacao/dialog.component';
import { DialogOkComponent } from 'src/app/shared/dialog-ok/dialog-ok.component';
import * as fs from 'file-saver';


import { MoradoresService } from '../../services/moradores.service';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-moradores-panel',
  templateUrl: './moradores-panel.component.html',
  styleUrls: ['./moradores-panel.component.scss']
})
export class MoradoresPanelComponent implements OnInit {

  fileForm = this.form.group({
    file: ['',Validators.required],
  })

  constructor(
    private service: MoradoresService,
    private form: FormBuilder,
    public dialog: MatDialog,
  ) { }

    filterControl = new FormControl('');
    totalLength!: number;
    pageSize = 5;
    page = 0;

    dataTable = new MatTableDataSource();
    displayedColumns = ['apartamento', 'nome', 'rg', 'cpf', 'email', 'telefonePrincipal', 'telefoneSecundario', 'contatoEmergencial', 'telefoneEmergencial',  'observacoes', 'acoes'];

    MoradoresForm = this.form.group({
      apartamento: [null, [Validators.required]],
      nome: [null, [Validators.required]],
      rg: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      email: [null, [Validators.required]],
      telefonePrincipal: [null, [Validators.required]],
      telefoneSecundario: [null],
      nomeContatoEmergencial: [null, [Validators.required]],
      telefoneContatoEmergencial: [null, [Validators.required]],
      observacoes: [null],
     });

     pageChange(pageEvent: PageEvent) {
      this.service
      .findAllPaginated(pageEvent, this.filterControl.value)
      .subscribe({
        next: (response) => {
          this.dataTable.data = response.content;
          this.totalLength = response.totalElements;
          this.pageSize = response.size;
          this.page = pageEvent.pageIndex;
          console.log(response);
        },
      error: () => console.log("Erro ao carregar!")
     });
  }

  ngOnInit(): void {
    this.filterControl.valueChanges.pipe(debounceTime(1000)).subscribe(query => {
      this.service.findAllPaginated({
        pageIndex: this.page,
        pageSize: this.pageSize,
        length: this.totalLength,
      },
        query).subscribe(response => {
          this.dataTable.data = response.content;
      });
    })

    this.pageChange({
      pageIndex: this.page,
      pageSize: this.pageSize,
      length: this.totalLength,
    });

  }

  delete(matricula: any) {
      this.service.delete(matricula).subscribe({
        next: () => {
          this.confirmDialog("Morador excluído com sucesso!");
          this.pageChange({
            pageIndex: this.page,
            pageSize: this.pageSize,
            length: this.totalLength,
          });
        },
        error: () => {
          this.confirmDialog("O morador não pôde ser excluído.");
        }
      });
  }

  openDialog(id : number) {
    const dialogRef = this.dialog.open(DialogComponent, {data: "Deseja Excluir o Morador?"});
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.delete(id);
      }
    }
    );
  }

  confirmDialog(msg: any){
    this.dialog.open(DialogOkComponent,
      {data: msg}
    )
  }

  downloadAllRequests(query?: string | null){
    this.service.findAllList(query).subscribe( response => {
      import("xlsx").then(xlsx => {
        const header:any[][] = [[
            'Apartamento',
            'Morador',
            'RG',
            'CPF',
            'Email',
            'Telefone Principal',
            'Telefone Secundario',
            'Contato de emergencia',
            'Telefone emergencial',
            'Observações'
        ]];
        let ws: any = xlsx.utils.book_new();
        xlsx.utils.sheet_add_aoa(ws,header);
        xlsx.utils.sheet_add_json(
          ws,
          response,
          {
            header: [
              'numero',
              'nome',
              'rg',
              'cpf',
              'email',
              'telefonePrincipal',
              'telefoneSecundario',
              'nomeContatoEmergencial',
              'telefoneContatoEmergencial',
              'observacoes'
            ],skipHeader: true,origin: 'A2'});
        const workbook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        ws['!cols'] = [{wpx: 100},{wpx: 100},{wpx: 100},{wpx: 100},{wpx: 100},{wpx: 100},{wpx: 100},{wpx: 100},{wpx: 100},{wpx: 100}]
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "moradores_newLife");
      });
    });
  }

  exportExcel(){

      if(this.filterControl.value != ''){
        this.downloadAllRequests(this.filterControl.value);
      }else{
        this.downloadAllRequests();
      }
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    fs.saveAs(
      data,
      fileName + EXCEL_EXTENSION
    );
  }

  file: any;

  loadFile(event: any){
    if(event.target.files && event.target.files[0]){
      this.file =event.target.files[0];
      this.fileForm.patchValue({
        file: this.file.name
      })
    }
  }

  importFile(){
    this.fileForm.reset();
    this.service.importMorador(this.file).subscribe(
      (success)=>{
        this.file = null;
        this.confirmDialog('Importação concluída!');
        this.ngOnInit();
      },
      (error)=>{
        if(error.error.status===400){
          this.confirmDialog("Falha")
        }
        this.file =null;
        this.ngOnInit();
      },()=>{}
    );
  }
}
