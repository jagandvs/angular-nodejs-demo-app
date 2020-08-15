import { TestBed } from '@angular/core/testing';

import { BomserviceService } from './bomservice.service';

describe('BomserviceService', () => {
  let service: BomserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BomserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
