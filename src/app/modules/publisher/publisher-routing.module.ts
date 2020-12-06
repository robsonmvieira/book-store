import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublisherDetalheComponent } from './pages/detalhe/publisher-detalhe.component';

const routes: Routes = [
  {
    path :':id',
    component: PublisherDetalheComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublisherRoutingModule { }
