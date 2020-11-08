import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { PublicMenuComponent } from './components/public-menu/public-menu.component';


@NgModule({
  declarations: [PublicMenuComponent, ContactComponent, HomeComponent],
  imports: [
    NgbModule,
    CommonModule,
    BrowserModule,

  ],
  exports: [
    NgbModule,
    CommonModule,
    BrowserModule,

    // components
    PublicMenuComponent,

  ]
})

export class CoreModule { }
