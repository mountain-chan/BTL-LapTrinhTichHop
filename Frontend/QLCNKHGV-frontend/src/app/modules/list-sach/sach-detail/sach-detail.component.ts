import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sach-detail',
  templateUrl: './sach-detail.component.html',
  styleUrls: ['./sach-detail.component.scss']
})
export class SachDetailComponent implements OnInit {

  listGiaoVien: any[] = [];
  Ten = "";
  Ma = "";
  constructor() { }

  ngOnInit() {
  }

}
