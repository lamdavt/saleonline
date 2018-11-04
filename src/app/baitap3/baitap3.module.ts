import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GheNgoiComponent } from './ghe-ngoi/ghe-ngoi.component';
import { DanhSachGheNgoiComponent } from './danh-sach-ghe-ngoi/danh-sach-ghe-ngoi.component';
import { QuanLyDanhSachGheNgoiComponent } from './quan-ly-danh-sach-ghe-ngoi/quan-ly-danh-sach-ghe-ngoi.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [GheNgoiComponent, DanhSachGheNgoiComponent, QuanLyDanhSachGheNgoiComponent],
  declarations: [GheNgoiComponent, DanhSachGheNgoiComponent, QuanLyDanhSachGheNgoiComponent]
})
export class Baitap3Module { }
