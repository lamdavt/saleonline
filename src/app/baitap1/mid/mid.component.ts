import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mid',
  templateUrl: './mid.component.html',
  styleUrls: ['./mid.component.css']
})
export class MidComponent implements OnInit {

  arrSmartPhone: Array<any> = [
    {
      name: 'iPhone X',
      img: 'sp_iphoneX.png',
      des: 'iPhone X features a new all-screen design. Face ID, which makes your face your password',
      price: '1000'
    },
    {
      name: 'Galaxy Note7',
      img: 'sp_note7.png',
      des: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason',
      price: '700'
    },
    {
      name: 'Vivo',
      img: 'sp_vivo850.png',
      des: 'A young global smartphone brand focusing on introducing perfect sound quality',
      price: '500'
    },
    {
      name: 'Blackberry',
      img: 'sp_blackberry.png',
      des: 'BlackBerry is a line of smartphones, tablets, and services originally designed',
      price: '400'
    }
  ];
  arrLapTop: Array<any> = [
    {
      name: 'MACBOOK',
      img: 'lt_macbook.png',
      des: 'The MacBook is a brand of notebook computers manufactured by Apple Inc',
      price: '1000'
    },
    {
      name: 'ASUS ROG',
      img: 'lt_rog.png',
      des: 'the Asus ROG Strix Flare is the latest addition to Asus lineup of ROG branded devices',
      price: '800'
    },
    {
      name: 'HP OMEN',
      img: 'lt_hp.png',
      des: 'A young global smartphone brand focusing on introducing perfect sound quality',
      price: '1000'
    },
    {
      name: 'LENOVO THINKPAD',
      img: 'lt_lenovo.png',
      des: 'The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012',
      price: '700'
    }
  ];
  constructor() { }

  ngOnInit() {

  }

}
