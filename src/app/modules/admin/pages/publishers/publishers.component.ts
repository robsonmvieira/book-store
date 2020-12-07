import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,  } from '@angular/router';
import { Observable } from 'rxjs';
import { PublisherFormComponent } from 'src/app/modules/publisher/form/publish-form.component';
import { Publisher } from 'src/app/modules/publisher/publisher.model';
import { PublisherService } from 'src/app/modules/publisher/publisher.service';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.scss']
})
export class PublishersComponent implements OnInit {

  @ViewChild(PublisherFormComponent, {static: false}) modal: PublisherFormComponent
  publishers$: Observable<Publisher[]>
  constructor(private publisherService: PublisherService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.publishers$ = this.publisherService.list()

  }

  openModal() {
    this.modal.openFormModal()
  }

  goToDetail(id: string): void {
    this.router.navigate(['/admin/editoras', id])
  }

  goToEdit(id: string): void {
    console.log('object')
  }

}
