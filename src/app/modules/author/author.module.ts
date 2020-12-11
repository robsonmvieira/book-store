import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorFormComponent } from './author-form/author-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AuthorFormComponent],
  imports: [
    SharedModule,
    AuthorRoutingModule
  ],
  exports: [ AuthorFormComponent ]
})
export class AuthorModule { }
