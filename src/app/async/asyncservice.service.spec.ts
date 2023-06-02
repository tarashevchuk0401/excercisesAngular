import { TestBed } from '@angular/core/testing';

import { AsyncserviceService } from './asyncservice.service';

describe('AsyncserviceService', () => {
  let service: AsyncserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
