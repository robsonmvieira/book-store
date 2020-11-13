import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResourceModalComponent } from './form-resource-modal.component';

describe('FormResourceModalComponent', () => {
  let component: FormResourceModalComponent;
  let fixture: ComponentFixture<FormResourceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormResourceModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormResourceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
