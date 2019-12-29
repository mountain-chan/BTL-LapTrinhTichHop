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
  MatIconModule, MatDialog, MatPaginatorModule, MatTabsModule
} from '@angular/material';
import { GiaovienDetailComponent } from './list-giaovien/giaovien-detail/giaovien-detail.component';
import { BaibaoDetailComponent } from './list-baibao/baibao-detail/baibao-detail.component';
import { DetaiDetailComponent } from './list-detai/detai-detail/detai-detail.component';
import { SachDetailComponent } from './list-sach/sach-detail/sach-detail.component';

@NgModule({
  declarations: [
    ListBaibaoComponent,
    ListDetaiComponent,
    ListGiaovienComponent,
    ListSachComponent,
    GiaovienDetailComponent,
    BaibaoDetailComponent,
    DetaiDetailComponent,
    SachDetailComponent
  ],
  imports: [
    // Core Module
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // modules
    MatIconModule,
    MatPaginatorModule,
    MatTabsModule,

  ],
  exports: [ListGiaovienComponent],
  providers: []
})
export class DashboardModule {
}
