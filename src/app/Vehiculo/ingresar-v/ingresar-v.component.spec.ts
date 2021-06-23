import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarVComponent } from './ingresar-v.component';

describe('IngresarVComponent', () => {
  let component: IngresarVComponent;
  let fixture: ComponentFixture<IngresarVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
