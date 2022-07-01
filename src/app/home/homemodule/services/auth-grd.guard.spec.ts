import { TestBed } from '@angular/core/testing';

import { AuthGrdGuard } from './auth-grd.guard';

describe('AuthGrdGuard', () => {
  let guard: AuthGrdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGrdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
