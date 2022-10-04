import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';

import { FuncionariosDetailsComponent } from './components/funcionarios-details/funcionarios-details.component';
import { FuncionariosPanelComponent } from './components/funcionarios-panel/funcionarios-panel.component';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';


@NgModule({
  declarations: [
    FuncionariosDetailsComponent,
    FuncionariosPanelComponent,
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    NgxMaskModule.forChild(),
  ]
})
export class FuncionariosModule { }
