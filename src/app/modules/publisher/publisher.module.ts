import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PublisherRoutingModule } from './publisher-routing.module';

import { PublisherFormComponent } from './form/publish-form.component';
import { PublisherDetalheComponent } from './pages/detalhe/publisher-detalhe.component';

@NgModule({
  declarations: [PublisherFormComponent, PublisherDetalheComponent],
  imports: [
    SharedModule,
    PublisherRoutingModule
  ],
  exports: [PublisherFormComponent, PublisherDetalheComponent]
})
export class PublisherModule { }
