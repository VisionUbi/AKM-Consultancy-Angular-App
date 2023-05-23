import { TestBed } from '@angular/core/testing';

import { ServicestDetailsService } from './servicest-details.service';

describe('ServicestDetailsService', () => {
  let service: ServicestDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicestDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
