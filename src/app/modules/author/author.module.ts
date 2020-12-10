import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorFormComponent } from './author-form/author-form.component';


@NgModule({
  declarations: [AuthorFormComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule
  ],
  exports: [ AuthorFormComponent ]
})
export class AuthorModule { }
