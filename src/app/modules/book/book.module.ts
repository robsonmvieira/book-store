import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { FormComponent } from './form/form.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FormComponent, BookDetailComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule
  ]
})
export class BookModule { }
