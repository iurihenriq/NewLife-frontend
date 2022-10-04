import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTabDetailsComponent } from '../shared/menu-tab-details/menu-tab-details.component';
import { MenuTabPanelComponent } from '../shared/menu-tab-panel/menu-tab-panel.component';
import { VeiculosDetailsComponent } from './components/veiculos-details/veiculos-details.component';
import { VeiculosPanelComponent } from './components/veiculos-panel/veiculos-panel.component';

const routes: Routes = [
  { path: '', component: MenuTabPanelComponent, children: [
    { path: '',  component: VeiculosPanelComponent }
  ] },
  { path: ':id', component: MenuTabDetailsComponent, children: [
    { path: '', component: VeiculosDetailsComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
