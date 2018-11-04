import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyDanhSachGheNgoiComponent } from './quan-ly-danh-sach-ghe-ngoi.component';

describe('QuanLyDanhSachGheNgoiComponent', () => {
  let component: QuanLyDanhSachGheNgoiComponent;
  let fixture: ComponentFixture<QuanLyDanhSachGheNgoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyDanhSachGheNgoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyDanhSachGheNgoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
