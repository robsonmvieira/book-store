import { EventEmitter, Injectable } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs'


Injectable({providedIn: 'root'})
export default class ComponentService {

  newAuthorEvent = new BehaviorSubject('')

  constructor () {}

  newAuthor (action: string) {
    this.newAuthorEvent.next(action)
  }
}
