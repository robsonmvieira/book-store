import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'


Injectable({providedIn: 'root'})
export class ComponentService {

  private newAuthorEvent = new BehaviorSubject<string>('')

  constructor () {}

  newAuthor (action: string) {
    this.newAuthorEvent.next(action)
  }

  getEvent() {
    return this.newAuthorEvent
  }
}
