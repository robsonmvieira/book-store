import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { CreatePublisher, UpdatePublisher } from 'src/app/state/publishers/actions';
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

  currentAction = 1;

  @ViewChild('longContent', {static: false}) modal;

  constructor(private modalService: NgbModal,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private store: Store) { }

  ngOnInit(): void {
    this.publisherFormBuilder()
  }

  openFormModal (publisherEdit?: Publisher) {
    if(publisherEdit) {
      this.setFormToEditMode()
      this.fillFormToEdit(this.publisherForm, publisherEdit)
      this.publisher = publisherEdit;
    }
    else {
      this.setFormToCreateMode()
      this.clearForm()
    }
    this.modalService.open(this.modal, {size: 'xl'})
  }

  submitForm () {
    if(this.currentAction === 1) {
      this.createPublisher()
    } else {
      this.updatePublisher()
    }
  }

  // private methods

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
    this.currentAction = 2;
  }

  private setFormToCreateMode (): void {
    this.titleForm = 'Nova Categoria'
    this.titleBtn = 'Salvar'
    this.currentAction = 1;
  }

  private updatePublisher (): void {
    const publisher = Object.assign({}, this.publisherForm.getRawValue())
    this.store.dispatch( new UpdatePublisher(this.publisher.id, publisher)).subscribe( () => {
      this.successMessage('Atualização realizada com sucesso"')
      this.clearForm()
      this.modalService.dismissAll()
    },
    () => {
      this.errorMessage('Ocorreu um erro ao tentar atualizar. Tente novamente mais tarde')
      this.modalService.dismissAll()
      this.clearForm()
    })
  }

  private createPublisher () {
    const data: Publisher = this.publisherForm.getRawValue()
    debugger
    this.store.dispatch(new CreatePublisher(data)).subscribe(() => {
      this.successMessage('Nova editora adicionada com sucesso!')
      this.clearForm()
      this.modalService.dismissAll()
    },
    () => {
      this.errorMessage('não foi possível criar a nova editora. Tente novamente mais tarde')
      this.clearForm()
      this.modalService.dismissAll()
    })
  }

  private successMessage(message: string): void {
    this.toastrService.success(`${message}`,  "Status")
  }
  private errorMessage(message: string): void {
    this.toastrService.error(`${message}`,  "Status")
  }

}


