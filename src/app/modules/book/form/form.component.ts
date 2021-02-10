import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from '../book.model';

@Component({
  selector: 'app-form-book',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  bookForm: FormGroup
  titleForm = ''
  titleBtn = ''
  currentAction = 1;

  @ViewChild('longContent', {static: false}) modal;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.bookFormBuilder()
  }

  submitForm() {}


  openModalFormSource(book?: Book) {
    if(book) {
      this.setFormToEditMode()
      this.fillFormToEdit(this.bookForm, book)
    } else {
      this.setFormToCreateMode()
    }

    this.modalService.open(this.modal, { size: 'xl'})
  }


  private fillFormToEdit(form: FormGroup, book: Book): void {
    form.patchValue(book)
  }

  private clearForm (): void {
    this.bookForm.reset()
  }

  private setFormToCreateMode (): void {
    this.titleForm = 'Criar Livro'
    this.titleBtn = 'Salvar'
    this.currentAction = 1;
  }
  private setFormToEditMode (): void {
    this.titleForm = 'Editar Livro'
    this.titleBtn = 'Atualizar'
    this.currentAction = 2;
  }


  private bookFormBuilder() {
    this.bookForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      pages: ['', [Validators.required]],
      isbn_10: ['', [Validators.required]],
      isbn_13: ['', [Validators.required]],
      publisher: ['', [Validators.required]],
      authors: ['', [Validators.required]],
      image: ['', [Validators.required]]
    })
  }

  private successMessage(message: string): void {
    this.toastrService.success(`${message}`,  "Status")
  }
  private errorMessage(message: string): void {
    this.toastrService.error(`${message}`,  "Status")
  }
}
