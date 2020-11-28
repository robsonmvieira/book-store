import { Base } from '../shared/models/base.model';

export class Author extends Base {

  static fromJson(json): Author {
    const category = Object.assign(new Author(), json)
    return category
  }
}
