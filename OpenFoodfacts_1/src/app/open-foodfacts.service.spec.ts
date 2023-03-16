import { TestBed } from '@angular/core/testing';

import { OpenFoodfactsService } from './open-foodfacts.service';

describe('OpenFoodfactsService', () => {
  let service: OpenFoodfactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenFoodfactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
