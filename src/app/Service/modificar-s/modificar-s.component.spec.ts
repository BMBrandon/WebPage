import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSComponent } from './modificar-s.component';

describe('ModificarSComponent', () => {
  let component: ModificarSComponent;
  let fixture: ComponentFixture<ModificarSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
