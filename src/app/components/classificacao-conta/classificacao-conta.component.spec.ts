import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificacaoContaComponent } from './classificacao-conta.component';

describe('ClassificacaoContaComponent', () => {
  let component: ClassificacaoContaComponent;
  let fixture: ComponentFixture<ClassificacaoContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassificacaoContaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassificacaoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
