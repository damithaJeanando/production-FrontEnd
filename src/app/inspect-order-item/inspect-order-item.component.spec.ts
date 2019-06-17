import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectOrderItemComponent } from './inspect-order-item.component';

describe('InspectOrderItemComponent', () => {
  let component: InspectOrderItemComponent;
  let fixture: ComponentFixture<InspectOrderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectOrderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
