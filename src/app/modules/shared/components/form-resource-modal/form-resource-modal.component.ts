import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-resource-modal',
  templateUrl: './form-resource-modal.component.html',
  styleUrls: ['./form-resource-modal.component.scss']
})
export class FormResourceModalComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  openModalFormResource(modal) {
    this.modalService.open(modal, {size: 'xl'});
  }

}
