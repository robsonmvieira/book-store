import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Publisher } from '../publisher.model';

@Component({
  selector: 'app-form-publisher',
  templateUrl: './publish-form.component.html',
  styleUrls: ['./publish-form.component.scss']
})
export class PublisherFormComponent implements OnInit {

  publisher: Publisher
  publisherForm: FormGroup
  titleForm = ""
  titleBtn = ""
  @ViewChild('longContent', {static: false}) modal;
  constructor(private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.publisherFormBuilder()
  }



  openFormModal (publisherEdit?: Publisher) {
    if(publisherEdit) {
      this.titleForm = "Editar Categoria"
      this.titleBtn = "Atualizar"
      this.publisherForm.patchValue(publisherEdit)
    }
    else {
      this.titleForm = "Nova Categoria"
      this.titleBtn = "Salvar"
      this.publisherForm.reset()
    }
    this.modalService.open(this.modal, {size: 'xl'})
  }

  private publisherFormBuilder() {
    this.publisherForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      web_site: ['', [Validators.required]]
    })
  }

}
