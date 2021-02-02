import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { FormComponent } from './form/form.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';

@NgModule({
  declarations: [FormComponent, BookDetailComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
