import { TestBed } from '@angular/core/testing';

import { ApiSushiService } from './api-sushi.service';

describe('ApiSushiService', () => {
  let service: ApiSushiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSushiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
