import { ToastrService } from 'ngx-toastr';

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { ComponentState } from 'src/app/state/components/state';
import { SetSelectedOption } from 'src/app/state/components/addNewResource';
import { AuthorFormComponent } from 'src/app/modules/author/author-form/author-form.component';
import { Author } from 'src/app/modules/author/author.model';
import { AuthorState } from 'src/app/state/authors/state';
import { GetAllAuthors } from 'src/app/state/authors/actions';
import { Router } from '@angular/router';
import { Publisher } from 'src/app/modules/publisher/publisher.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})

export class AuthorsComponent implements OnInit, AfterViewInit {
  subscription: Subscription

  @Select(ComponentState.selectedOption)
  valueEmitedByMenu: Observable<string>

  @Select(AuthorState.allAuthors)
  authors$: Observable<Author[]>

  @Select(AuthorState.authorsListSize)
  authorCount$: Observable<number>

  selectedAuthorToEdit: Author;

  isNewAuthor = null

  @ViewChild(AuthorFormComponent, { static: false }) modal: AuthorFormComponent;

  constructor(
    private store: Store,
    private router: Router,
    private toastrService: ToastrService
    ) { }

  ngOnInit(): void {

    this.store.dispatch( new GetAllAuthors())

   }


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

  goToEdit(id: string): void {
    const selectedAuthor = this.setAuthorToEdit(id)

    if (selectedAuthor) {
      this.modal.openModalFormResource(selectedAuthor)
    } else {
      this.toastrService.error('Um erro Interno aconteceu. Tente mais tarde', 'error interno ', {
        closeButton: true,
        timeOut: 3000,
      })
    }
  }

  goToDetail(id: string): void {
    this.router.navigate(['admin','autores', id])
  }

  private setAuthorToEdit(id: string): Author {

    this.authors$.subscribe(arr => {
      this.selectedAuthorToEdit = arr.find(a => a.id === id)
    })
    return this.selectedAuthorToEdit
  }



}
