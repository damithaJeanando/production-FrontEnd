import { TestBed } from '@angular/core/testing';

import { CapacityPlanService } from './capacity-plan.service';

describe('CapacityPlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapacityPlanService = TestBed.get(CapacityPlanService);
    expect(service).toBeTruthy();
  });
});
