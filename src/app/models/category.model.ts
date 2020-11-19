import { Base } from '../modules/shared/models/base.model';

export default class Category extends Base  {
  name: string

  static fromJson(json): Category {
    const category = Object.assign(new Category(), json)
    return category
  }
}
