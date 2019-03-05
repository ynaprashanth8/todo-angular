import { TestBed } from '@angular/core/testing';

import { HardCodedAutheticationService } from './hard-coded-authetication.service';

describe('HardCodedAutheticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardCodedAutheticationService = TestBed.get(HardCodedAutheticationService);
    expect(service).toBeTruthy();
  });
});
