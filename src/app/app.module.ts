import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Baitap1Module } from './baitap1/baitap1.module';
import { AppRoutingModule } from './app-routing.module';
import { Baitap2Module } from './baitap2/baitap2.module';
import { Baitap3Module } from './baitap3/baitap3.module';
import { Baitap4Module } from './baitap4/baitap4.module';
import { Baitap5Module } from './baitap5/baitap5.module';
import { Baitap6Module } from './baitap6/baitap6.module';
import { Baitap7Module } from './baitap7/baitap7.module';
import { Baitap8Module } from './baitap8/baitap8.module';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Baitap1Module,
    Baitap2Module,
    Baitap3Module,
    Baitap4Module,
    Baitap5Module,
    Baitap6Module,
    Baitap7Module,
    Baitap8Module,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
