import { TestBed } from '@angular/core/testing';

import { LiftLogsService } from './liftlogs.service';

describe('LiftlogsService', () => {
  let service: LiftLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiftLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
