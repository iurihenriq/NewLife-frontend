import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CPFPipe } from 'src/app/shared/pipe/cpf.pipe';
import { ObservacaoPipe } from 'src/app/shared/pipe/observacao.pipe';
import { RgPipe } from 'src/app/shared/pipe/rg.pipe';
import { TelefonePipe } from 'src/app/shared/pipe/telefone.pipe';

@NgModule({
  declarations: [
    CPFPipe,
    RgPipe,
    TelefonePipe,
    ObservacaoPipe,
  ],

  exports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatTableModule,
    MatSelectModule,
    CPFPipe,
    MatDialogModule,
    RgPipe,
    TelefonePipe,
    ObservacaoPipe,
    MatTabsModule],
})

export class AppMaterialModule { }
