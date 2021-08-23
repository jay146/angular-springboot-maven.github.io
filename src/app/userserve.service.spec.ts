import { TestBed } from '@angular/core/testing';

import { UserserveService } from './userserve.service';

describe('UserserveService', () => {
  let service: UserserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
