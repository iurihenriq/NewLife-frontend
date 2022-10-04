import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTabDetailsComponent } from '../shared/menu-tab-details/menu-tab-details.component';
import { MenuTabPanelComponent } from '../shared/menu-tab-panel/menu-tab-panel.component';
import { FuncionariosPanelComponent } from './components/funcionarios-panel/funcionarios-panel.component';
import { FuncionariosDetailsComponent } from './components/funcionarios-details/funcionarios-details.component';

const routes: Routes = [
  { path: '', component: MenuTabPanelComponent, children: [
    { path: '',  component: FuncionariosPanelComponent }
  ] },
  { path: ':id', component: MenuTabDetailsComponent, children: [
    { path: '', component: FuncionariosDetailsComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
