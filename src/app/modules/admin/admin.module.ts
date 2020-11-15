import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AuthorsComponent } from './pages/authors/authors.component';
import { BooksComponent } from './pages/books/books.component';
import ComponentService from '../shared/services/component.service';

@NgModule({
  declarations: [HomeComponent, AuthorsComponent, BooksComponent],
  imports: [
    AdminRoutingModule,
    SharedModule
  ],
  providers: [ComponentService]
})
export class AdminModule { }
