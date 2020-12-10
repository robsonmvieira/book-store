import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseResourceService } from '../shared/services/base-resource.service';
import { Author } from './author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends BaseResourceService<Author> {

  constructor( protected injector: Injector) {
    super(`${environment.url}authors`, injector, Author.fromJson)
   }
}
