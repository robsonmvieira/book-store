import { AuthorModule } from './../author/author.module';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AuthorsComponent } from './pages/authors/authors.component';
import { BooksComponent } from './pages/books/books.component';
import { ComponentService } from '../shared/services/component.service';
import { PublishersComponent } from './pages/publishers/publishers.component';
import { PublisherModule } from '../publisher/publisher.module';

@NgModule({
  declarations: [HomeComponent, AuthorsComponent, BooksComponent, PublishersComponent],

  imports: [
    SharedModule,
    AdminRoutingModule,
    PublisherModule,
    AuthorModule
  ],
  providers: [ComponentService]
})
export class AdminModule { }
