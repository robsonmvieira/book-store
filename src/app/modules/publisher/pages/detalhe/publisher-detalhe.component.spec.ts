import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherDetalheComponent } from './publisher-detalhe.component';

describe('PublisherDetalheComponent', () => {
  let component: PublisherDetalheComponent;
  let fixture: ComponentFixture<PublisherDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
