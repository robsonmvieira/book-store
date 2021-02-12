import { Publisher } from "src/app/modules/publisher/publisher.model"
import { UpdatePublisherDto } from "./dtos"

export class GetPublishers {
  static readonly type = '[Admin] get All publishers'
  constructor() {}
}

export class CreatePublisher {
  static readonly type = '[Admin] add new publisher'

  constructor(public payload: Publisher) { }
}

export class UpdatePublisher {
  static readonly type = '[Admin] update publisher'
  constructor(public id: string, public payload: UpdatePublisherDto) {}
}
