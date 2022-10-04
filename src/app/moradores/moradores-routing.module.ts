import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuTabDetailsComponent } from '../shared/menu-tab-details/menu-tab-details.component';
import { MenuTabPanelComponent } from '../shared/menu-tab-panel/menu-tab-panel.component';
import { MoradoresDatailsComponent } from './components/moradores-details/moradores-datails.component';
import { MoradoresPanelComponent } from './components/moradores-panel/moradores-panel.component';

const routes: Routes = [
  { path: '', component: MenuTabPanelComponent, children: [
    { path: '',  component: MoradoresPanelComponent }
  ] },
  { path: ':id', component: MenuTabDetailsComponent, children: [
    { path: '', component: MoradoresDatailsComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoradoresRoutingModule { }
