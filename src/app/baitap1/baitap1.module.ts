import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MidComponent } from './mid/mid.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductItemSmartphoneComponent } from './product-item-smartphone/product-item-smartphone.component';
import { ProductItemLaptopComponent } from './product-item-laptop/product-item-laptop.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CarouselComponent,
    MidComponent,
    FooterComponent,
    HomePageComponent,
    ProductItemSmartphoneComponent,
    ProductItemLaptopComponent
  ],
  declarations: [
    HeaderComponent,
    CarouselComponent,
    MidComponent,
    FooterComponent,
    HomePageComponent,
    ProductItemSmartphoneComponent,
    ProductItemLaptopComponent,
  ]
})
export class Baitap1Module { }
