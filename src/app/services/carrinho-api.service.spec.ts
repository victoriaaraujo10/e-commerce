import { TestBed } from '@angular/core/testing';

import { CarrinhoAPIService } from './carrinho-api.service';

describe('CarrinhoAPIService', () => {
  let service: CarrinhoAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrinhoAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
