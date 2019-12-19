import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListBaibaoComponent } from './list-baibao/list-baibao.component';
import { ListDetaiComponent } from './list-detai/list-detai.component';
import { ListGiaovienComponent } from './list-giaovien/list-giaovien.component';
import { ListSachComponent } from './list-sach/list-sach.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatIconModule
} from '@angular/material';

@NgModule({
  declarations: [
    ListBaibaoComponent,
    ListDetaiComponent,
    ListGiaovienComponent,
    ListSachComponent
  ],
  imports: [
    // Core Module
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // modules
    MatIconModule
    

  ],
  exports: [ListGiaovienComponent],
  providers: []
})
export class DashboardModule {
}
