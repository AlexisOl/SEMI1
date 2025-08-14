import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoetasComponent } from './poetas.component';

describe('PoetasComponent', () => {
  let component: PoetasComponent;
  let fixture: ComponentFixture<PoetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoetasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
