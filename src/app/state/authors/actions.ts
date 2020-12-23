import { Author } from "src/app/modules/author/author.model"
import { EditAuthorDTO } from "./dtos"

export class GetAllAuthors {
  static readonly type = '[Admin] Get all Authors'
  constructor() {}
}

export class CreateAuthor {
  static readonly type = '[Admin] add new Author'
  constructor(public payload: Author) {}
}

export class UpdateAuthor {
  static readonly type = '[Admin] update Author'
  constructor(public payload: EditAuthorDTO) {}
}
