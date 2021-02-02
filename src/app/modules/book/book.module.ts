import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
