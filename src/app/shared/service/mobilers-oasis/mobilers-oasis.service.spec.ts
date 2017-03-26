import { TestBed, inject } from '@angular/core/testing';

import { MobilersOasisService } from './mobilers-oasis.service';

describe('MobilersOasisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobilersOasisService]
    });
  });

  it('should ...', inject([MobilersOasisService], (service: MobilersOasisService) => {
    expect(service).toBeTruthy();
  }));
});
