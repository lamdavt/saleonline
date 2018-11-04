import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachGheNgoiComponent } from '../danh-sach-ghe-ngoi/danh-sach-ghe-ngoi.component';

@Component({
  selector: 'app-quan-ly-danh-sach-ghe-ngoi',
  templateUrl: './quan-ly-danh-sach-ghe-ngoi.component.html',
  styleUrls: ['./quan-ly-danh-sach-ghe-ngoi.component.css']
})
export class QuanLyDanhSachGheNgoiComponent implements OnInit {

  // @ViewChild (DanhSachGheNgoiComponent) dsgheCon: DanhSachGheNgoiComponent;
  // themghe(maghe: string) {
    // console.log(this.dsgheCon);
    // this.dsgheCon.themdsghe(maghe, true);
  // }
  constructor() { }

  ngOnInit() {
  }

}
