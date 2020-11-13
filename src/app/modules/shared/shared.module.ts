import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormResourceModalComponent } from './components/form-resource-modal/form-resource-modal.component';



@NgModule({
  declarations: [FormResourceModalComponent],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [
    CommonModule,
    NgbModule,
  ]
})
export class SharedModule { }
