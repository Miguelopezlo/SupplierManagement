import { TestBed } from '@angular/core/testing';

import { DropDownTextService } from './drop-down-text.service';

describe('DropDownTextService', () => {
  let service: DropDownTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropDownTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
