import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { CountdownModule } from 'ngx-countdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PublicMenuComponent } from './components/public-menu/public-menu.component';
import { HttpClientModule } from '@angular/common/http';

// https://themeforest.net/item/bookoe-book-store-website-ui-design-psd-template/29272869

@NgModule({
  declarations: [PublicMenuComponent],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule,
    CountdownModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  exports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    CountdownModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // components
    PublicMenuComponent,

  ]
})

export class CoreModule { }
