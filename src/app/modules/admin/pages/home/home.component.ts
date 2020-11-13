import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  submenuClients = false
  submenuBooks = false
  submenuAuthors = false
  submenuPublishers = false

  constructor() { }

  ngOnInit(): void {
  }

}
