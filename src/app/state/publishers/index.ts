
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { PublisherStateModel } from './state';
import { PublisherService } from 'src/app/modules/publisher/publisher.service';
import { map } from 'rxjs/operators';
import { GetPublishers, CreatePublisher, UpdatePublisher } from './actions';

@State<PublisherStateModel>({
  name: 'publishers',
  defaults: {
    publishers: []
  }
})


@Injectable()
export class PublisherState {

  constructor(private publisherService: PublisherService) {}

  @Selector()
  static publisherLength(state: PublisherStateModel) {
    return state.publishers.length
  }

  @Selector()
  static publishersList(state: PublisherStateModel) {
    return state.publishers
  }

  @Action(GetPublishers)
  getPublishers (ctx: StateContext<PublisherStateModel>) {
    return this.publisherService.list().pipe(
      map(response => {
        const state = ctx.getState();
        ctx.patchState({...state, publishers: response })
      })
    )
  }

  @Action(CreatePublisher)
  addPublisher (ctx: StateContext<PublisherStateModel>, action: CreatePublisher) {
    debugger
    return this.publisherService.create(action.payload).subscribe(response => {
      const state = ctx.getState();
      ctx.patchState({ publishers: [...state.publishers, response]})
    })
  }

  @Action(UpdatePublisher)
  updatePublisher (ctx: StateContext<PublisherStateModel>, action: UpdatePublisher) {
    return this.publisherService.update(action.id, action.payload).subscribe(response => {
      const state = ctx.getState();
      ctx.patchState({ publishers: state.publishers.map(
      item => item.id === action.id ? response: item )})
      }
    )
  }
}

