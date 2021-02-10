import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: ':id',
      component: BookDetailComponent
    }
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
