import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-resource-modal',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss']
})
export class AuthorFormComponent implements OnInit {

  @ViewChild('longContent') modal: ElementRef
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }


  openModalFormResource() {
    this.modalService.open(this.modal, {size: 'xl'});
  }

}
