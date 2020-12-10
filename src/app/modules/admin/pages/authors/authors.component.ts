
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { ComponentState } from 'src/app/state/components/state';
import { SetSelectedOption } from 'src/app/state/components/addNewResource';
import { AuthorFormComponent } from 'src/app/modules/author/author-form/author-form.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit, AfterViewInit {
  subscription: Subscription

  @Select(ComponentState.selectedOption)
  valueEmitedByMenu: Observable<string>

  isNewAuthor = null

  @ViewChild(AuthorFormComponent, { static: false }) modal: AuthorFormComponent;

  constructor(private store: Store) { }

  ngOnInit(): void { }


  ngAfterViewInit(): void {
    this.valueEmitedByMenu.subscribe(value => {
      this.isNewAuthor = value
    })

    if (this.isNewAuthor !== null && this.isNewAuthor.includes('new-author')) {
      this.modal.openModalFormResource()
      this.store.dispatch(new SetSelectedOption(null))
    }
  }


  openModal() {
    this.modal.openModalFormResource()
  }

}
