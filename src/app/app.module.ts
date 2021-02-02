import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { PublisherState } from './state/publishers';
import { ComponentState } from './state/components/state';
import { environment } from 'src/environments/environment';
import { AuthorState } from './state/authors/state';
import { BookState } from './state/books/state';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    CoreModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    NgxsModule.forRoot([
      PublisherState,
      ComponentState,
      AuthorState,
      BookState
    ],
    { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
