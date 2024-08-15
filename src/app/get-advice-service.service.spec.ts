import { TestBed } from '@angular/core/testing';

import { GetAdviceServiceService } from './get-advice-service.service';

describe('GetAdviceServiceService', () => {
  let service: GetAdviceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAdviceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
