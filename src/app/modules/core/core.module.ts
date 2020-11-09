import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { PublicMenuComponent } from './components/public-menu/public-menu.component';
import { RouterModule } from '@angular/router';
import { CountdownModule } from 'ngx-countdown';
// https://themeforest.net/item/bookoe-book-store-website-ui-design-psd-template/29272869
@NgModule({
  declarations: [PublicMenuComponent],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule,
    CountdownModule,

  ],
  exports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    CountdownModule,

    // components
    PublicMenuComponent,

  ]
})

export class CoreModule { }
