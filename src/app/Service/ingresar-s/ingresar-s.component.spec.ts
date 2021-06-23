import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarSComponent } from './ingresar-s.component';

describe('IngresarSComponent', () => {
  let component: IngresarSComponent;
  let fixture: ComponentFixture<IngresarSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
