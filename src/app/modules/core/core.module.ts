import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    NgbModule,
    CommonModule,
    BrowserModule
  ],
  exports: [
    NgModule,
    BrowserModule,
  ]
})
export class CoreModule { }
