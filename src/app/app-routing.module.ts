import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { routes as appRoutes } from './infra/config/app.routes'

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: appRoutes.contact, component: ContactComponent
  },
  {
    path: appRoutes.login,
    component: LoginComponent
  },
  {
    path: appRoutes.register,
    component: SignupComponent
  },
  {
    path: appRoutes.about,
    component: AboutComponent
  },
  {
    path: appRoutes.admin.root,
    loadChildren: () => import('./modules/admin/admin.module').then(a => a.AdminModule)
  },
  {
    path: appRoutes.publisher.root,
    loadChildren: () =>import('./modules/publisher/publisher.module').then(e => e.PublisherModule)
  },
  {
    path: appRoutes.authors.root,
    loadChildren: () =>import('./modules/author/author.module').then(a => a.AuthorModule)
  },
  {
    path: appRoutes.books.root,
    loadChildren: () =>import('./modules/book/book.module').then(a => a.BookModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
