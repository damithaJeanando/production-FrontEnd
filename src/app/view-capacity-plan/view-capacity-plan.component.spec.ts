import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCapacityPlanComponent } from './view-capacity-plan.component';

describe('ViewCapacityPlanComponent', () => {
  let component: ViewCapacityPlanComponent;
  let fixture: ComponentFixture<ViewCapacityPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCapacityPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCapacityPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
