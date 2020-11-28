import { Base } from '../shared/models/base.model';

export class Publisher extends Base {

  name: string

  web_site: string

  email: string

  books?: Book[]

  authors?: Author[]

  static fromJson(json): Publisher {
    const category = Object.assign(new Publisher(), json)
    return category
  }
}
