import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { MoradoresDatailsComponent } from './components/moradores-details/moradores-datails.component';
import { MoradoresPanelComponent } from './components/moradores-panel/moradores-panel.component';
import { MoradoresRoutingModule } from './moradores-routing.module';

@NgModule({
  declarations: [
    MoradoresDatailsComponent,
    MoradoresPanelComponent,
  ],
  imports: [
    CommonModule,
    MoradoresRoutingModule,
    AppMaterialModule,
    NgxMaskModule.forChild(),
  ]
})
export class MoradoresModule { }
