import { Injectable, Injector } from '@angular/core';
import Category from 'src/app/models/category.model';
import { environment } from 'src/environments/environment';
import { BaseResourceService } from '../shared/services/base-resource.service';


@Injectable({
  providedIn: 'root'
})

export class CategoryService extends BaseResourceService<Category> {

  constructor (protected injector: Injector) {
    super(`${environment.url}categories`, injector, Category.fromJson)
  }

}
