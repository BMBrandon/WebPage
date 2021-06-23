import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSComponent } from './listar-s.component';

describe('ListarSComponent', () => {
  let component: ListarSComponent;
  let fixture: ComponentFixture<ListarSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
