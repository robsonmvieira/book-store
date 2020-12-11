import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PublisherState } from 'src/app/state/publishers';
import { GetPublishers } from 'src/app/state/publishers/actions';
import { Publisher } from '../../publisher/publisher.model';

@Component({
  selector: 'app-form-resource-modal',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss']
})

export class AuthorFormComponent implements OnInit {


  authorFom: FormGroup;

  @Select(PublisherState.publishersList)
  publishers$: Observable<Publisher[]>

  hasOptionSelected: Publisher
  @ViewChild('longContent') modal: ElementRef

  constructor(
    private store: Store,
    private modalService: NgbModal,
    private fb: FormBuilder
    ) {}

  ngOnInit(): void {
    this.store.dispatch(new  GetPublishers())
    this.buildAuthorForm()
  }


  openModalFormResource() {
    this.modalService.open(this.modal, { size: 'xl' });
  }

  setPublisher(id: string) {
    console.log(id)
  }

  private buildAuthorForm() {
    this.authorFom = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: [ '', [Validators.required, Validators.email]],
      publisher: ['' ,[Validators.required]]
    })
  }

  submitForm() {
    const data = this.authorFom.getRawValue()
    this.clearForm()
    this.modalService.dismissAll()
  }

  private clearForm(): void {
    this.authorFom.reset()
  }



}
