import { TestBed } from '@angular/core/testing';

import { LightBulb } from './light-bulb';

describe('LightBulb', () => {
  let service: LightBulb;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightBulb);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
