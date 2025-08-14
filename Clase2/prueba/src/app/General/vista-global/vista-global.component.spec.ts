import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaGlobalComponent } from './vista-global.component';

describe('VistaGlobalComponent', () => {
  let component: VistaGlobalComponent;
  let fixture: ComponentFixture<VistaGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaGlobalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
