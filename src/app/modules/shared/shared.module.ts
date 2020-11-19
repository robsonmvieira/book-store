import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormResourceModalComponent } from './components/form-resource-modal/form-resource-modal.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [FormResourceModalComponent],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    NgbModule,
    HttpClientModule,

    // components
    FormResourceModalComponent,
  ],
  providers: [HttpClientModule]
})
export class SharedModule { }
