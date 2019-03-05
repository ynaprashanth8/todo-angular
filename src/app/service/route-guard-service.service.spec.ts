import { TestBed } from '@angular/core/testing';

import { RouteGuardService } from './route-guard-service.service';

describe('RouteGuardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteGuardService = TestBed.get(RouteGuardService);
    expect(service).toBeTruthy();
  });
});
