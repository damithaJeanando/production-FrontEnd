import { TestBed } from '@angular/core/testing';

import { WorkScheduleService } from './workSchedule.service';

describe('WorkScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkScheduleService = TestBed.get(WorkScheduleService);
    expect(service).toBeTruthy();
  });
});
