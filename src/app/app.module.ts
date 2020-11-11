import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
