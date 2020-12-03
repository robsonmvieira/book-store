import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseResourceService } from '../shared/services/base-resource.service';
import { Publisher } from './publisher.model';

@Injectable({
  providedIn: 'root'
})
export class PublisherService extends BaseResourceService<Publisher> {

  constructor (protected injector: Injector) {
    super(`${environment.url}publishers`, injector, Publisher.fromJson)
  }
}
