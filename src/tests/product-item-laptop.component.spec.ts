import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemLaptopComponent } from './product-item-laptop.component';

describe('ProductItemLaptopComponent', () => {
  let component: ProductItemLaptopComponent;
  let fixture: ComponentFixture<ProductItemLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
