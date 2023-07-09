import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'teste', loadChildren: ()=> import('./modulos/teste/teste.module').then(t => t.TesteModule) },
  { path: 'pag', loadChildren: ()=> import('./modulos/pagamento/pagamento.module').then(p => p.PagamentoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
