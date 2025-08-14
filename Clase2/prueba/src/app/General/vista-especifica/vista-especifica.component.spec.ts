import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEspecificaComponent } from './vista-especifica.component';

describe('VistaEspecificaComponent', () => {
  let component: VistaEspecificaComponent;
  let fixture: ComponentFixture<VistaEspecificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaEspecificaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
