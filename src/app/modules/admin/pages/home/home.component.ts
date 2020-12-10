import { ComponentService } from 'src/app/modules/shared/services/component.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetSelectedOption } from 'src/app/state/components/addNewResource';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  submenuClients = false
  submenuBooks = false
  submenuAuthors = false
  submenuPublishers = false

  @Output() newAuthor: EventEmitter<any> = new EventEmitter();

  constructor(private componentService: ComponentService,
    private router: Router,
    private store: Store) { }

  ngOnInit(): void {
  }

  newAction (action: string, resource: string) {
    this.store.dispatch(new SetSelectedOption(action))
    this.router.navigate([`/admin/${resource}`])
  }

}
