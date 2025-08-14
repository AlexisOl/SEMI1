import { TestBed } from '@angular/core/testing';

import { PoetasServiceService } from './poetas-service.service';

describe('PoetasServiceService', () => {
  let service: PoetasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoetasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
