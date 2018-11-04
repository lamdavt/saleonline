import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './baitap1/home-page/home-page.component';
import { DatabindingComponent } from './baitap2/databinding/databinding.component';
import { QuanLyDanhSachGheNgoiComponent } from './baitap3/quan-ly-danh-sach-ghe-ngoi/quan-ly-danh-sach-ghe-ngoi.component';



const routes: Routes = [
  { path: '', redirectTo: '/baitap3', pathMatch: 'full' },
  { path: 'baitap1', component: HomePageComponent },
  { path: 'baitap2', component: DatabindingComponent },
  { path: 'baitap3', component: QuanLyDanhSachGheNgoiComponent },
  { path: 'baitap4', component: DatabindingComponent },
  { path: 'baitap5', component: DatabindingComponent },
  { path: 'baitap6', component: DatabindingComponent },
  { path: 'baitap7', component: DatabindingComponent },
  { path: 'baitap8', component: DatabindingComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
