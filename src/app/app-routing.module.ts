import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'moradores' },
  {
    path: 'moradores',
    loadChildren: () => import('./moradores/moradores.module').then(m => m.MoradoresModule)
  },
  {
    path: 'funcionarios',
    loadChildren: () => import('./funcionarios/funcionarios.module').then(m => m.FuncionariosModule)
  },
  {
    path: 'visitantes',
    loadChildren: () => import('./visitantes/visitantes.module').then(m => m.VisitantesModule)
  },
  {
    path: 'veiculos',
    loadChildren: () => import('./veiculos/veiculos.module').then(m => m.VeiculosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
