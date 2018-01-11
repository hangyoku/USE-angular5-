import { TestBed, inject } from '@angular/core/testing';

import { PreLoadingService } from './pre-loading.service';

describe('PreLoadingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreLoadingService]
    });
  });

  it('should be created', inject([PreLoadingService], (service: PreLoadingService) => {
    expect(service).toBeTruthy();
  }));
});
