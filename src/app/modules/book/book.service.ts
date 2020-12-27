import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseResourceService } from '../shared/services/base-resource.service';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService extends BaseResourceService<Book> {

  constructor(protected injector: Injector) {
    super(`${environment.url}books`, injector, Book.fromJson);
   }
}
