import { catchError } from 'rxjs/operators';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Select, Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CreateAuthor, GetAllAuthors, UpdateAuthor } from 'src/app/state/authors/actions';
import { EditAuthorDTO } from 'src/app/state/authors/dtos';
import { PublisherState } from 'src/app/state/publishers';
import { GetPublishers } from 'src/app/state/publishers/actions';
import { Publisher } from '../../publisher/publisher.model';
import { Author } from '../author.model';

@Component({
  selector: 'app-form-resource-modal',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss']
})

export class AuthorFormComponent implements OnInit {


  authorFom: FormGroup;

  @Select(PublisherState.publishersList)
  publishers$: Observable<Publisher[]>


  titleFom = ""
  btnAction = ""
  currentAction= ''

  hasOptionSelected: Publisher
  @ViewChild('longContent') modal: ElementRef

  constructor (
    private store: Store,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastrService: ToastrService
    ) {}

  ngOnInit (): void {
    this.store.dispatch(new  GetPublishers())
    this.buildAuthorForm()
  }


  openModalFormResource (author?: Author) {

    if(author) {
      this.setFormToEditMode()
      this.fillFormToEdit(this.authorFom, author)
      this.setPublisher(author.id)

    } else {
      this.setFormToCreateMode()
      this.clearForm()
      this.hasOptionSelected = null
    }

    this.modalService.open(this.modal, { size: 'xl' });
  }

  setPublisher (id: string) {
    this.publishers$.subscribe(arr => {
      this.hasOptionSelected = arr.find(p => p.id === id)
    })
  }

  submitForm () {
    const data = this.authorFom.getRawValue()

    console.log(this.currentAction)
    if (this.currentAction.includes('createMode')) {
      this.createAuthor()

    }

    if (this.currentAction === 'editMode') {
      this.updateAuthor(data)
    }
  }

  // private methods


  private buildAuthorForm () {
    this.authorFom = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: [ '', [Validators.required, Validators.email]],
      publisher: ['' ,[Validators.required]],
      publisher_id: ['']
    })
  }

  private clearForm (): void {
    this.authorFom.reset()
  }

 private setFormToEditMode () {
    this.titleFom = "Editar autor"
    this.btnAction = "Atualizar"
    this.currentAction = "editMode"

  }
  private setFormToCreateMode () {
    this.titleFom = "Novo autor"
    this.btnAction = "Salvar"
    this.currentAction = "createMode"
  }

  private fillFormToEdit (form: FormGroup, author: Author): void {
    form.addControl('id', new FormControl(''))
    form.patchValue(author)
    form.patchValue({
      publisher: author.publisher.id,
      publisher_id: author.publisher.id,
    })
  }

  private createAuthor (): void {
    this.authorFom.patchValue({
      publisher_id: this.authorFom.controls['publisher'].value,
    })
    this.authorFom.removeControl('id')
    const data = this.authorFom.getRawValue()

    if(this.authorFom.valid) {
      this.store.dispatch( new CreateAuthor(data)).subscribe(() => {
        this.clearForm(),
        this.successMessage("Operação Realizada com sucesso")
        this.modalService.dismissAll()
      })
    }
  }

  private updateAuthor (author: EditAuthorDTO): void {
    if(this.authorFom.valid) {
      this.store.dispatch(new UpdateAuthor(author)).subscribe(() => {
        this.successMessage('Atualização realizada com sucesso')
      },
      () => this.errorMessage('Ocorreu um erro na Tentativa da Ação, tente mais tarde'))
      this.clearForm()
      this.modalService.dismissAll()
    }
  }

  private successMessage(message: string): void {
    this.toastrService.success(`${message}`,  "Status")
  }
  private errorMessage(message: string): void {
    this.toastrService.error(`${message}`,  "Status")
  }

}
