import { TestBed } from '@angular/core/testing';

import { PoemasServicioService } from './poemas-servicio.service';

describe('PoemasServicioService', () => {
  let service: PoemasServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoemasServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
