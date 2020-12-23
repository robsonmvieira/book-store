import { Book } from '../book/book.model';
import { Publisher } from '../publisher/publisher.model';
import { Base } from '../shared/models/base.model';

export class Author extends Base {

  name: string
  email: string
  books?: Book[]
  publisher?: Publisher
  publisher_id: string


  static fromJson(json): Author {
    const category = Object.assign(new Author(), json)
    return category
  }
}
