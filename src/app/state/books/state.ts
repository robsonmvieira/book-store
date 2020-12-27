import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Book } from "src/app/modules/book/book.model";
import { BookService } from "src/app/modules/book/book.service";
import { GetAllBooks } from "./actions";

export interface BookStateModel {
  books: Book[]
}

@State<BookStateModel>({
  name: 'books',
  defaults: {
    books: []
  }
})


@Injectable()
export class BookState {

  constructor(private bookService: BookService) {}

  @Selector()
  static GetAllBooks(ctx: BookStateModel) {
    return ctx.books
  }

  @Selector()
  static bookListSize(ctx: BookStateModel) {
    return ctx.books.length
  }

  @Action(GetAllBooks)
  bookList(ctx: StateContext<BookStateModel>, action: GetAllBooks) {
    return this.bookService.list().subscribe(response => {
      const state = ctx.getState();
      ctx.patchState({...state, books: response })
    })
  }
}
