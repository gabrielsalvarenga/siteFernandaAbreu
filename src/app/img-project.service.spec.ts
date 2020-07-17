import { TestBed } from '@angular/core/testing';

import { ImgProjectService } from './img-project.service';

describe('ImgProjectService', () => {
  let service: ImgProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
