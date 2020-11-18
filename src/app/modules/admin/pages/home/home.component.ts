import { ComponentService } from 'src/app/modules/shared/services/component.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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

  @Output() newAuthor: EventEmitter<any> = new EventEmitter();

  constructor(private componentService: ComponentService, private router: Router) { }

  ngOnInit(): void {
  }

  newAction (action: string) {
    this.componentService.newAuthor(action)
    this.router.navigate(['/admin/autores'])
  }

}
