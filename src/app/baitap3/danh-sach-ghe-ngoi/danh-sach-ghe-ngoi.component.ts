import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-danh-sach-ghe-ngoi',
  templateUrl: './danh-sach-ghe-ngoi.component.html',
  styleUrls: ['./danh-sach-ghe-ngoi.component.css']
})
export class DanhSachGheNgoiComponent implements OnInit {

  DanhSachGhe: Array<any> = [];

  // tslint:disable-next-line:max-line-length
  // public DanhSachGhe: Array<any> = [{maghe: 'ghe1', trangthai: false}, {maghe: 'ghe2', trangthai: false}, {maghe: 'ghe3', trangthai: false}];
  // tslint:disable-next-line:no-inferrable-types
  // public SoGheDaDat: number = 0;
  // public SoGheChuaDat: number = this.ChiTietGhe.DanhSachGhe.length;
  DanhSachGheDuocDat: Array<any> = [];
  DanhSachGheDaDat: Array<any> = [];
  Tien = 0;
  checkDatve = false;
  TongTien() {
    let sumOfMoney = 0;
    for(let ghe of this.DanhSachGheDuocDat)
    {
        sumOfMoney += ghe.GiaVe;
    }
    this.Tien = sumOfMoney;
}
  // Dat_Ghe_Parent(trangthaighe: boolean, TenGhe) {
    // alert(TenGhe);
    // if (trangthaighe === true) {
      // this.SoGheDaDat++;
      // this.SoGheChuaDat--;
    // } else {
      // this.SoGheDaDat--;
      // this.SoGheChuaDat++;
    // }
  // }
  // themdsghe(maghe: string, trangthai: boolean) {
  //   const ob = {maghe: maghe, trangthai: trangthai};
  //   this.ChiTietGhe.DanhSachGhe.push(ob);
  // }
  constructor(private getApi: ApiService) { }

  ngOnInit() {
    this.getApi.getDanhSachGhe().subscribe(data => {
      this.DanhSachGhe = data.DanhSachGhe;
    });
  }

  DatGhe(value){
    let ve : { MaGhe, TenGhe, GiaVe } = {
      MaGhe : value.MaGhe,
      TenGhe : value.TenGhe,
      GiaVe : value.GiaVe
    }
    let i = 0;
    let flag : boolean = false;
    for(let ghe of this.DanhSachGheDuocDat)
    {
        if(value.MaGhe === ghe.MaGhe)
        {
            if(value.DaDat === false)
            {
                this.DanhSachGheDuocDat.splice(i,1);
                this.DanhSachGheDaDat.splice(i,1);
            } 
            flag = true;
        }
        i++;
    }
    if( flag === false)
    {
      this.DanhSachGheDuocDat.push(ve);
      this.DanhSachGheDaDat.push(value);
    }
    if(this.DanhSachGheDaDat.length > 0){
      this.checkDatve = true;
    } else {
     this.checkDatve = false;
    }
    this.TongTien();
  }
  BookGhe(){
  //   let ve = {
  //     MaLichChieu: '762',
  //     TaiKhoanNguoiDung: 'khoa95',
  //     DanhSachVe: this.DanhSachGheDuocDat
  //   }
  //   this.getApi.DatVeGhe(ve).subscribe();
  //   alert('Đặt vé thành công');
  }
}
