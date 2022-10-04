import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

import { VisitantesRoutingModule } from './visitantes-routing.module';
import { VisitantesDetailsComponent } from './components/visitantes-details/visitantes-details.component';
import { VisitantesPanelComponent } from './components/visitantes-panel/visitantes-panel.component';


@NgModule({
  declarations: [
    VisitantesDetailsComponent,
    VisitantesPanelComponent
  ],
  imports: [
    CommonModule,
    VisitantesRoutingModule,
    NgxMaskModule.forChild(),
  ]
})
export class VisitantesModule { }
