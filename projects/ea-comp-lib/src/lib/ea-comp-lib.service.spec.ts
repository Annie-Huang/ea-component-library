import { TestBed } from '@angular/core/testing';

import { EaCompLibService } from './ea-comp-lib.service';

describe('EaCompLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EaCompLibService = TestBed.get(EaCompLibService);
    expect(service).toBeTruthy();
  });
});
