import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Category from 'src/app/models/category.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  protected readonly apiPath = `${environment.url}categories`
  constructor(protected httpClient: HttpClient) { }


  listcategories (): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.apiPath)
  }

}
