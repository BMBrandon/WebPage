import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarVComponent } from './modificar-v.component';

describe('ModificarVComponent', () => {
  let component: ModificarVComponent;
  let fixture: ComponentFixture<ModificarVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
