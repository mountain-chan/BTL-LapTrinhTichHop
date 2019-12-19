import { Component, OnInit } from '@angular/core';
import { GiaoVienService } from 'src/app/core/services/giaovien/giaovien.service';

@Component({
  selector: 'app-list-giaovien',
  templateUrl: './list-giaovien.component.html',
  styleUrls: ['./list-giaovien.component.scss']
})
export class ListGiaovienComponent implements OnInit {

  listGiaoVien: any[] = [];

  constructor(
    private giaoVienService: GiaoVienService,
  ) { }

  ngOnInit() {
    this.getListGiaoVien();
  }

  private getListGiaoVien() {
    this.giaoVienService.getAllGiaoVien()
      .subscribe((res) => {
        this.listGiaoVien = res;
      });
  }

}
