import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoContaComponent } from './descricao-conta.component';

describe('DescricaoContaComponent', () => {
  let component: DescricaoContaComponent;
  let fixture: ComponentFixture<DescricaoContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescricaoContaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescricaoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
