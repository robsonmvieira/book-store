import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'


Injectable({providedIn: 'root'})
export class ComponentService {

  newAuthorEvent = new BehaviorSubject('')

  constructor () {}

  newAuthor (action: string) {
    this.newAuthorEvent.next(action)
  }
}
