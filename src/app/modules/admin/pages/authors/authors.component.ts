import { FormResourceModalComponent } from './../../../shared/components/form-resource-modal/form-resource-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from 'src/app/modules/shared/services/component.service';
import { map, take, tap } from 'rxjs/operators'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  subscription: Subscription
  value = ''
  @ViewChild('modalForm', { static: false }) modal: FormResourceModalComponent;
  @ViewChild('authorForm', {static: false}) modalForm;
  constructor(private router: Router,  private componentService: ComponentService) { }

  ngOnInit(): void {
    this.subscription = this.componentService.getEvent()
    .pipe(
      map(d => this.value = d),
      take(1),
      map(c => c = ''),
    )
    .subscribe(() =>  {
      if (this.value === 'new-author') {
        this.router.navigate(['/admin/autores']).then(() => {
          this.modal.openModalFormResource(this.modalForm)
        })
      }
    })
    this.componentService.newAuthor('')
  }
  openModalFormResource(modal) {
    this.modal.openModalFormResource(modal)
  }

  ngOnDestroy () {
    this.subscription.unsubscribe()
  }

}
