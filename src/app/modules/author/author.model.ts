import { Book } from '../book/book.model';
import { Base } from '../shared/models/base.model';

export class Author extends Base {

  name: string
  email: string
  books?: Book[]


  static fromJson(json): Author {
    const category = Object.assign(new Author(), json)
    return category
  }
}
