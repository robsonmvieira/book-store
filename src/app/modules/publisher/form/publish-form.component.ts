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
  titleForm = ''
  titleBtn = ''
  @ViewChild('longContent', {static: false}) modal;
  constructor(private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.publisherFormBuilder()
  }



  openFormModal (publisherEdit?: Publisher) {
    if(publisherEdit) {
      this.setFormToEditMode()
      this.fillFormToEdit(this.publisherForm, publisherEdit)
    }
    else {
      this.setFormToCreateMode()
      this.clearForm()
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

  private fillFormToEdit(form: FormGroup, publisher: Publisher): void {
    form.patchValue(publisher)
  }

  private clearForm (): void {
    this.publisherForm.reset()
  }

  private setFormToEditMode (): void {
    this.titleForm = 'Editar Categoria'
    this.titleBtn = 'Atualizar'
  }

  private setFormToCreateMode (): void {
    this.titleForm = 'Nova Categoria'
    this.titleBtn = 'Salvar'
  }
}


