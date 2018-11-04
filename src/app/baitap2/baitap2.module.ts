import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DatabindingComponent],
  declarations: [DatabindingComponent]
})
export class Baitap2Module { }
