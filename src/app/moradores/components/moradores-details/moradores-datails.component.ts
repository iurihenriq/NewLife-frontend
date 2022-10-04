import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { MoradoresService } from '../../services/moradores.service';
import { DialogOkComponent } from './../../../shared/dialog-ok/dialog-ok.component';

@Component({
  selector: 'app-moradores-datails',
  templateUrl: './moradores-datails.component.html',
  styleUrls: ['./moradores-datails.component.scss']
})
export class MoradoresDatailsComponent implements OnInit {

  constructor(
    private service: MoradoresService,
    private route: ActivatedRoute,
    private router: Router,
    private form: FormBuilder,
    public dialog: MatDialog,
  ) { }

  aptoList: { idApartamento: number; numero: number }[] = [];
  isEdit = false;
  idMorador!: number;

  moradoresForm = this.form.group({
    apartamento: [null, [Validators.required]],
    nome: [null, [Validators.required]],
    rg: [null, [Validators.required]],
    cpf: [null, [Validators.required]],
    telefonePrincipal: [null, [Validators.required]],
    telefoneSecundario: [],
    email: [null, [Validators.required]],
    nomeContatoEmergencial: [null, [Validators.required]],
    telefoneContatoEmergencial: [null, [Validators.required]],
    observacoes: [],
   })

  ngOnInit(): void {
    this.service.findAllAptos().subscribe(
      (response)=>{
        this.aptoList=response;
      }
    )

    this.route.params.subscribe({
      next: (params) => {
        this.isEdit = params['id'] !== 'new';
        this.idMorador = params['id'];
      },
    });

    if (this.isEdit) {
      this.patch();
    }
  }

  patch() {
    this.service.getById(this.idMorador).subscribe({
      next: (response) =>{
        this.moradoresForm.patchValue(response);
        console.log(response);
      }
    });
  }

 create() {
  const data = this.moradoresForm.value;
  this.service.create(data).subscribe({
    next: () => {
      this.confirmDialog("Morador adicionado com sucesso!");
      this.router.navigate(['/moradores']);
    },
    error: () => {
      this.confirmDialog("O morador não pôde ser adicionado.");
    },
  });
 }

 save() {
  const data = this.moradoresForm.value;
  this.service.update(data, this.idMorador).subscribe({
    next: () => {
      this.confirmDialog("O morador foi atualizado com sucesso!");
      this.router.navigate(['/moradores']);
    },
    error: () => {
      this.confirmDialog("O morador não pôde ser atualizado :(");
    }
  });
 }

 confirmDialog(msg: any){
  this.dialog.open(DialogOkComponent,
    {data: msg}
  )
}
}

