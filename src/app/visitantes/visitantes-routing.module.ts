import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTabDetailsComponent } from '../shared/menu-tab-details/menu-tab-details.component';
import { MenuTabPanelComponent } from '../shared/menu-tab-panel/menu-tab-panel.component';
import { VisitantesDetailsComponent } from './components/visitantes-details/visitantes-details.component';
import { VisitantesPanelComponent } from './components/visitantes-panel/visitantes-panel.component';

const routes: Routes = [
  { path: '', component: MenuTabPanelComponent, children: [
    { path: '',  component: VisitantesPanelComponent }
  ] },
  { path: ':id', component: MenuTabDetailsComponent, children: [
    { path: '', component: VisitantesDetailsComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitantesRoutingModule { }
