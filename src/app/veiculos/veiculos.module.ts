import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosDetailsComponent } from './components/veiculos-details/veiculos-details.component';
import { VeiculosPanelComponent } from './components/veiculos-panel/veiculos-panel.component';


@NgModule({
  declarations: [
    VeiculosDetailsComponent,
    VeiculosPanelComponent
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    NgxMaskModule.forChild(),
  ]
})
export class VeiculosModule { }
