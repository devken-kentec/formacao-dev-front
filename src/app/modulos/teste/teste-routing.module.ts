import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteFormComponent } from './teste-form/teste-form.component';

const routes: Routes = [
  { path: '', component: TesteFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteRoutingModule { }
