import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";
import { Book } from "src/app/modules/book/book.model";
import { BookService } from "src/app/modules/book/book.service";

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
}
