import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'contato', component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: SignupComponent
  },
  {
    path: 'sobre',
    component: AboutComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(a => a.AdminModule)
  },
  {
    path: 'admin/editoras',
    loadChildren: () =>import('./modules/publisher/publisher.module').then(e => e.PublisherModule)
  },
  {
    path: 'admin/autores',
    loadChildren: () =>import('./modules/author/author.module').then(a => a.AuthorModule)
  },
  {
    path: 'admin/livros',
    loadChildren: () =>import('./modules/book/book.module').then(a => a.BookModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
