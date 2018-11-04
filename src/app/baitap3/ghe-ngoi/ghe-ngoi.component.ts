import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe-ngoi',
  templateUrl: './ghe-ngoi.component.html',
  styleUrls: ['./ghe-ngoi.component.css']
})
export class GheNgoiComponent implements OnInit {

  DaDat : boolean = false;
  @Input() Ghe;
  public trangthai = false;
  @Output() eventDatGhe = new EventEmitter();
  // DatGhe() {
    // if (value === true) {
    //     this.trangthai = false;
    // } else {
    //   this.trangthai = true;
    // }
    // this.trangthai = !this.trangthai;
    // Đẩy biến trang thái ra component cha khi có sự thay đổi
  //   this.eventDatGhe.emit(this.trangthai);
  // }
  DatGhe(soGhe, tenGhe, giaVe)
  {
    this.trangthai = !this.trangthai;
      let ghe = { MaGhe : soGhe, TenGhe : tenGhe, GiaVe : giaVe, DaDat : this.DaDat};
      this.eventDatGhe.emit(ghe);
  }
  constructor() { }

  ngOnInit() {
  }

}
