import { NgModule } from '@angular/core';

import { BookRoutingModule } from './book-routing.module';
import { FormComponent } from './form/form.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FormComponent, BookDetailComponent],
  imports: [
    BookRoutingModule,
    SharedModule
  ],
  exports: [FormComponent, BookDetailComponent]
})
export class BookModule { }
