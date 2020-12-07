import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormResourceModalComponent } from './components/form-resource-modal/form-resource-modal.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [FormResourceModalComponent],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    // components
    FormResourceModalComponent,
  ],
  providers: [HttpClientModule]
})
export class SharedModule { }
