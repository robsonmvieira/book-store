import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,  } from '@angular/router';
import { PublisherFormComponent } from 'src/app/modules/publisher/form/publish-form.component';
import { Publisher } from 'src/app/modules/publisher/publisher.model';
import { PublisherService } from 'src/app/modules/publisher/publisher.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.scss']
})
export class PublishersComponent implements OnInit {

  @ViewChild(PublisherFormComponent, {static: false}) modal: PublisherFormComponent
  publishers: Publisher[] =[]
  publisherSelectedToEdit: Publisher;
  constructor(private publisherService: PublisherService,
    private router: Router,
    private toastrService: ToastrService
    ) { }

  ngOnInit(): void {

    this.publisherService.list().subscribe(response => {
      this.publishers = response
    })

  }


  openModal(publisherToEdit?: Publisher) {
    if(publisherToEdit) {
      this.modal.openFormModal(publisherToEdit)
    } else {
      this.modal.openFormModal()
    }
  }

  goToDetail(id: string): void {
    this.router.navigate(['/admin/editoras', id])
  }

  goToEdit(id: string): void {
    this.publisherSelectedToEdit =  this.publishers.find(pub => pub.id == id)
    if (this.publisherSelectedToEdit) {
      this.openModal(this.publisherSelectedToEdit)
    } else {
      this.toastrService.error('Um erro Interno aconteceu. Tente mais tarde', 'error interno ', {
        closeButton: true,
        timeOut: 3000,
      })
    }
  }

}
