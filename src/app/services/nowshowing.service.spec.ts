import { TestBed } from '@angular/core/testing';

import { NowshowingService } from './nowshowing.service';

describe('NowshowingService', () => {
  let service: NowshowingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NowshowingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
