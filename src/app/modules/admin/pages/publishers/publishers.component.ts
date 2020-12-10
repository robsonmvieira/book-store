import { Router,  } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PublisherFormComponent } from 'src/app/modules/publisher/form/publish-form.component';
import { Publisher } from 'src/app/modules/publisher/publisher.model';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { find, map, take } from 'rxjs/operators';
import { ComponentService } from 'src/app/modules/shared/services/component.service';
import { Store, Select } from '@ngxs/store';
import { GetPublishers } from 'src/app/state/publishers/actions';
import { PublisherState } from 'src/app/state/publishers';
import { ComponentState } from 'src/app/state/components/state';
import { SetSelectedOption } from 'src/app/state/components/addNewResource';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.scss']
})
export class PublishersComponent implements OnInit, AfterViewInit {
  // subscription: Subscription
  value = ''
  @Select(PublisherState.publisherLength)
  publisherSize$: Observable<number>

  @Select(PublisherState.publishersList)
  publishers$: Observable<Publisher[]>

  @Select(ComponentState.selectedOption)
  valueEmitedByMenu: Observable<string>

  isNewPublisher = null

  @ViewChild(PublisherFormComponent, {static: false}) modal: PublisherFormComponent
  publisherSelectedToEdit: Publisher;

  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private store: Store
    ) { }

  ngAfterViewInit(): void {
    this.valueEmitedByMenu.subscribe(response => {
        this.isNewPublisher = response
    })

    if (this.isNewPublisher !== null && this.isNewPublisher.includes('new-publisher')) {
      this.modal.openFormModal()
      this.store.dispatch(new SetSelectedOption(null))
    }

  }

  ngOnInit(): void {
    this.store.dispatch(new GetPublishers())
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

    this.publishers$.subscribe(resp => {
      this.publisherSelectedToEdit =  resp.find(item => item.id === id)
    })

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
