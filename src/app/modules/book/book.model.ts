import { Author } from './../author/author.model';
import { Base } from '../shared/models/base.model';
import { Publisher } from '../publisher/publisher.model';

export class Book extends Base {

  title: string
  authors: Author[]
  publisher: Publisher
  isbn10: string
  isbn13: string
  status: boolean
  image?: string

  static fromJson(json): Book {
    const category = Object.assign(new Book(), json)
    return category
  }
}
