import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  bookForm: FormGroup
  titleForm: string
  titleBtn: string
  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {}

}
