import { Base } from '../shared/models/base.model';

export class Book extends Base {

  static fromJson(json): Book {
    const category = Object.assign(new Book(), json)
    return category
  }
}
