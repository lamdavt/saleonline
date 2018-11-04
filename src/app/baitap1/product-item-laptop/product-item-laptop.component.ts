import { Component, OnInit, Input } from '@angular/core';
import { Laptop } from 'src/models/laptop';

@Component({
  selector: 'app-product-item-laptop',
  templateUrl: './product-item-laptop.component.html',
  styleUrls: ['./product-item-laptop.component.css']
})
export class ProductItemLaptopComponent implements OnInit {

  @Input() arrLapTop: Array<Laptop>;
  index1 = 0;
  status: Boolean = false;
  constructor() { }

  ngOnInit() {

  }

  ShowDes() {
    this.status = !this.status;
  }

  selectItem(index: number) {
    this.index1 = index;
  }

}
