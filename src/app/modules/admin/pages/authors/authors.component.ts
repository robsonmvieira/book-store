import { FormResourceModalComponent } from './../../../shared/components/form-resource-modal/form-resource-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import ComponentService from 'src/app/modules/shared/services/component.service';
import { map, take, tap } from 'rxjs/operators'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  subscription: Subscription

  @ViewChild('modalForm', { static: false }) modal: FormResourceModalComponent;
  @ViewChild('authorForm', {static: false}) modalForm;
  constructor(private router: Router, private componentService: ComponentService) { }

  ngOnInit(): void {

    // this.modal.openModalFormResource()
    this.subscription = this.componentService.newAuthorEvent
    .pipe(
      take(1)
    )
    .subscribe((ev: string) =>  {
      if (ev.includes('new-author')) {
        this.router.navigate(['/admin/autores']).then(() => {
          this.modal.openModalFormResource(this.modalForm)
        })
      }
    })

  }
  openModalFormResource(modal) {
    this.modal.openModalFormResource(modal)
  }

  ngOnDestroy () {
    this.subscription.unsubscribe()
  }

}
