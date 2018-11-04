import { Component, OnInit, Input } from '@angular/core';
import { Smartphone } from 'src/models/smartphone';

@Component({
  selector: 'app-product-item-smartphone',
  templateUrl: './product-item-smartphone.component.html',
  styleUrls: ['./product-item-smartphone.component.css']
})
export class ProductItemSmartphoneComponent implements OnInit {

  @Input() arrSmartPhone: Array<Smartphone>;
  index1: Number = 0;
  index2: Number = 0;
  status: Boolean = false;
  constructor() { }

  ngOnInit() {

  }

  selectItem(index: number) {
    this.index1 = index;
  }

  ShowDes() {
    this.status = !this.status;
  }

}
