import { TestBed } from '@angular/core/testing';

import { AllPurposeService } from './all-purpose.service';

describe('AllPurposeService', () => {
  let service: AllPurposeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllPurposeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
