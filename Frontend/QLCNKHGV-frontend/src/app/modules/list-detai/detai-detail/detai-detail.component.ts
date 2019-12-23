import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detai-detail',
  templateUrl: './detai-detail.component.html',
  styleUrls: ['./detai-detail.component.scss']
})
export class DetaiDetailComponent implements OnInit {

  listGiaoVien: any[] = [];
  Ten = "";
  Ma = "";
  constructor() { }

  ngOnInit() {
  }

}
