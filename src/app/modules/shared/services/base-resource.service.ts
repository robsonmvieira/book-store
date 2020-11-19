import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Base } from '../models/base.model';

export abstract class BaseResourceService<T extends Base> {
  protected readonly baseUrl = "";
  protected httpClient: HttpClient

  constructor (protected apiPath: string,
    protected injector: Injector,
    protected entityFromJsonFn: (json: any) => T) {
    this.httpClient = injector.get(HttpClient)
  }
  //   this.baseUrl = `${environment.url}${this.apiPath}`


  list (): Observable<T[]> {
    return this.httpClient.get<T[]>(this.apiPath).pipe(
      map(this.jsonToResources.bind(this)),
      catchError(this.handlerError)
    )
  }


  protected jsonToResources(from: any[]): T[] {
    const resources: T[] = []

    from.forEach(el => resources.push(this.entityFromJsonFn(el)))
    return resources
  }

  protected handlerError(err: any): Observable<any> {
    console.log(err)
    return throwError(err)
  }

  protected jsonToResource(resouce: any): T {
    const resources = this.entityFromJsonFn(resouce)
    return resources
  }
}
