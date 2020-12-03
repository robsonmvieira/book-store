import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PublisherRoutingModule } from './publisher-routing.module';

import { PublisherFormComponent } from './form/publish-form.component';


@NgModule({
  declarations: [PublisherFormComponent],
  imports: [
    SharedModule,
    PublisherRoutingModule
  ],
  exports: [PublisherFormComponent]
})
export class PublisherModule { }
