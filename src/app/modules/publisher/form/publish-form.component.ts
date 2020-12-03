import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-publisher',
  templateUrl: './publish-form.component.html',
  styleUrls: ['./publish-form.component.scss']
})
export class PublisherFormComponent implements OnInit {

  @ViewChild('longContent', {static: false}) modal;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  openFormModal () {
    this.modalService.open(this.modal, {size: 'xl'})
  }

}
