import { Author } from "src/app/modules/author/author.model"
import { Book } from "src/app/modules/book/book.model"

export class UpdatePublisherDto {
  name?: string
  web_site?: string
  email?: string
  books?: Book[]
  authors?: Author[]
}
