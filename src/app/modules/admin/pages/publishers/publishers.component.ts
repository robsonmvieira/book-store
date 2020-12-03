import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Publisher } from 'src/app/modules/publisher/publisher.model';
import { PublisherService } from 'src/app/modules/publisher/publisher.service';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.scss']
})
export class PublishersComponent implements OnInit {

  publishers$: Observable<Publisher[]>
  constructor(private publisherService: PublisherService) { }

  ngOnInit(): void {

    this.publishers$ = this.publisherService.list()

  }

}
