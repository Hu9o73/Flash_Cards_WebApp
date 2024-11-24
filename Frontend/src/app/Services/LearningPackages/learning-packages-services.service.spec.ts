import { TestBed } from '@angular/core/testing';

import { LearningPackagesService } from './learning-packages-services.service';

describe('LearningPackagesServicesService', () => {
  let service: LearningPackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningPackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
