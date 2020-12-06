import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Publisher } from '../../publisher.model';
import { PublisherService } from '../../publisher.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './publisher-detalhe.component.html',
  styleUrls: ['./publisher-detalhe.component.scss']
})
export class PublisherDetalheComponent implements OnInit {
  publisherId: string;
  publisher: Publisher
  constructor(private route: ActivatedRoute, private publisherService: PublisherService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
     this.publisherService.getOne(param.id).subscribe(response => {
      this.publisher = response
     })
    })
  }

}
