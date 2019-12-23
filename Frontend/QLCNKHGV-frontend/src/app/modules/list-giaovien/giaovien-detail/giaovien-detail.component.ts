import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giaovien-detail',
  templateUrl: './giaovien-detail.component.html',
  styleUrls: ['./giaovien-detail.component.scss']
})
export class GiaovienDetailComponent implements OnInit {

  listBaiBao: any[] = [];
  listDeTai: any[] = [];
  listSach: any[] = [];
  listNam: number[] = [];
  curentYear = new Date().getFullYear();
  Ten = "";
  Ma = "";
  SDT = "";
  Email = "";
  TongTai = 0;

  constructor() { }

  ngOnInit() {
    for (let year = 2015; year <= Number(this.curentYear); year++) {
      this.listNam.push(year);
    }
  }

}
