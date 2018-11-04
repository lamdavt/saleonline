import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http, Response, Headers } from '@angular/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }
  public getDanhSachGhe(): Observable<any> {
    let obServe: Observable<any[]> = this.http.get(`http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=762`).pipe(map((result: Response) => result.json()));
    return obServe;
  }
  public DatVeGhe(ve):Observable<any>{
    let header = new Headers();
    header.append('Content-Type','application/json; charset=UTF-8');
    let obServe=this.http.post(`http://sv2.myclass.vn/api/QuanLyDatVe/DatVe`,ve,{headers:header}).pipe(map((result:Response)=>result.json()));
    return obServe;
  }
}

