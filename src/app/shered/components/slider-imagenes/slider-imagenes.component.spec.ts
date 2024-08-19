import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SLIDERIMAGENESComponent } from './slider-imagenes.component';

describe('SLIDERIMAGENESComponent', () => {
  let component: SLIDERIMAGENESComponent;
  let fixture: ComponentFixture<SLIDERIMAGENESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SLIDERIMAGENESComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SLIDERIMAGENESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
