import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';

describe('carouselComponent', () => {
  let component: carouselComponent;
  let fixture: ComponentFixture<carouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ carouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(carouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
