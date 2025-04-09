import { TestBed } from '@angular/core/testing';

import { ClassificacaoContaService } from './classificacao-conta.service';

describe('ClassificacaoContaService', () => {
  let service: ClassificacaoContaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassificacaoContaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
