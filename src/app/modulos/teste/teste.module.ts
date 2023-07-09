import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesteRoutingModule } from './teste-routing.module';
import { TesteFormComponent } from './teste-form/teste-form.component';


@NgModule({
  declarations: [
    TesteFormComponent
  ],
  imports: [
    CommonModule,
    TesteRoutingModule
  ]
})
export class TesteModule { }
