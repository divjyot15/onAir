import { TestBed } from '@angular/core/testing';

import { LinkToBackendService } from './link-to-backend.service';

describe('LinkToBackendService', () => {
  let service: LinkToBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkToBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
