import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { Author } from 'src/app/modules/author/author.model';
import { AuthorService } from 'src/app/modules/author/author.service';
import { GetAllAuthors } from './actions';

export interface AuthorStateModel {
  authors: Author[]
}

@State<AuthorStateModel>({
  name: 'authors',
  defaults: {
    authors: []
  }
})

@Injectable()
export class AuthorState {

  constructor(private authorService: AuthorService){}

  @Selector()
  static allAuthors(ctx: AuthorStateModel) {
    return ctx.authors
  }

  @Selector()
  static authorsListSize(ctx: AuthorStateModel) {
    return ctx.authors.length
  }

  @Action(GetAllAuthors)
  authorsList(ctx: StateContext<AuthorStateModel>) {
    return this.authorService.list().pipe(
      map( response => {
        const state = ctx.getState()
        ctx.setState({
          ...state,
          authors: [...response]
        })
      })
    )
  }

}
