import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachGheNgoiComponent } from './danh-sach-ghe-ngoi.component';

describe('DanhSachGheNgoiComponent', () => {
  let component: DanhSachGheNgoiComponent;
  let fixture: ComponentFixture<DanhSachGheNgoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachGheNgoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachGheNgoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
