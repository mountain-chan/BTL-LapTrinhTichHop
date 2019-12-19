import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListGiaovienComponent } from './modules/list-giaovien/list-giaovien.component';
import { ListBaibaoComponent } from './modules/list-baibao/list-baibao.component';
import { ListDetaiComponent } from './modules/list-detai/list-detai.component';
import { ListSachComponent } from './modules/list-sach/list-sach.component';


const routes: Routes = [
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
