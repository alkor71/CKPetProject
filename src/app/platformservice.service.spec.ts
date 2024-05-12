import { TestBed } from '@angular/core/testing';
import { XBoxService } from './XBoxservice.service';

describe('TaskserviceService', () => {
  let service: XBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
