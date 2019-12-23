import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListGiaovienComponent } from './modules/list-giaovien/list-giaovien.component';
import { ListBaibaoComponent } from './modules/list-baibao/list-baibao.component';
import { ListDetaiComponent } from './modules/list-detai/list-detai.component';
import { ListSachComponent } from './modules/list-sach/list-sach.component';
import { LayoutComponent } from './layouts/layout.component';
import { GiaovienDetailComponent } from './modules/list-giaovien/giaovien-detail/giaovien-detail.component';
import { SachDetailComponent } from './modules/list-sach/sach-detail/sach-detail.component';
import { DetaiDetailComponent } from './modules/list-detai/detai-detail/detai-detail.component';
import { BaibaoDetailComponent } from './modules/list-baibao/baibao-detail/baibao-detail.component';


const routes: Routes = [

  { path: '', redirectTo: 'list-giaovien', pathMatch: 'full' },
  { 
    path: '', 
    component: LayoutComponent, 
    children: [
      {
        path: 'giaovien-detail',
        component: GiaovienDetailComponent,
      },
      {
        path: 'baibao-detail',
        component: BaibaoDetailComponent,
      },
      {
        path: 'detai-detail',
        component: DetaiDetailComponent,
      },
      {
        path: 'sach-detail',
        component: SachDetailComponent,
      },
      {
        path: 'list-giaovien',
        component: ListGiaovienComponent,
      },
      {
        path: 'list-baibao',
        component: ListBaibaoComponent,
      },
      {
        path: 'list-detai',
        component: ListDetaiComponent,
      },
      {
        path: 'list-sach',
        component: ListSachComponent,
      }
    ] 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
