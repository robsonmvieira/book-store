import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormComponent } from 'src/app/modules/book/form/form.component';
import { BookState } from 'src/app/state/books/state';
import { SetSelectedOption } from 'src/app/state/components/addNewResource';
import { ComponentState } from 'src/app/state/components/state';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, AfterViewInit {
  @Select(ComponentState.selectedOption)
  valueEmitedByMenu: Observable<string>

  @Select(BookState.bookListSize)
  booksLength$: Observable<number>

  isNewBook = null

  @ViewChild(FormComponent, {static: false}) modal: FormComponent;

  constructor(private store: Store) { }


  ngAfterViewInit(): void {
    this.valueEmitedByMenu.subscribe(value => {
      this.isNewBook = value
    })

    if (this.isNewBook !== null && this.isNewBook.includes('new-book')) {
      this.modal.openModalFormSource()
      this.store.dispatch(new SetSelectedOption(null))
    }

  }

  ngOnInit(): void {}


  openModal() {
    // console.log(this.modal.titleForm)
    this.modal.openModalFormSource()
  }

}
