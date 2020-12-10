import { Injectable } from '@angular/core';
import {  Action, Selector, State, StateContext } from '@ngxs/store';
import { SetSelectedOption } from './addNewResource';

export interface ComponentStateModel {
  selectedOption: string
}

@State<ComponentStateModel>({
  name: 'components',
  defaults: {
    selectedOption: null
  }
})
@Injectable()
export class ComponentState {

  @Selector()
  static selectedOption(ctx: ComponentStateModel) {
    return ctx.selectedOption
  }

  @Action(SetSelectedOption)
  setSelectedOption(ctx: StateContext<ComponentStateModel>, action: SetSelectedOption) {
    const state = ctx.getState()
    return ctx.setState({
      ...state,
      selectedOption: action.payload
    })
  }
}
