import { Book } from "src/app/modules/book/book.model"
import { Publisher } from "src/app/modules/publisher/publisher.model"

export class EditAuthorDTO {
  id: string
  name: string
  email: string
  books?: Book[]
  publisher?: Publisher
  publisher_id: string
}
