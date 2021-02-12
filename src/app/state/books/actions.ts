import { Book } from "src/app/modules/book/book.model"

export class GetAllBooks {
  static readonly type = '[Admin] get all books'

  constructor() {}
}

export class CreateBook {
  static readonly type = '[Admin] new book'

  constructor(public payload: Book) {}
}
