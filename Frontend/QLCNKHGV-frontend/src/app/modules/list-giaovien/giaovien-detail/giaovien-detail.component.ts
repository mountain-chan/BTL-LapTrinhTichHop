import { Component, OnInit } from '@angular/core';
import { GiaoVienService } from 'src/app/core/services/giaovien/giaovien.service';
import { BaiBaoService } from 'src/app/core/services/baibao/baibao.service';
import { ActivatedRoute, Router, RouterEvent, NavigationStart } from '@angular/router';
import { MatDialog } from '@angular/material';
import { filter, tap } from 'rxjs/operators';
import { DeTaiService } from 'src/app/core/services/detai/detai.service';
import { SachService } from 'src/app/core/services/sach/sach.service';

@Component({
  selector: 'app-giaovien-detail',
  templateUrl: './giaovien-detail.component.html',
  styleUrls: ['./giaovien-detail.component.scss']
})
export class GiaovienDetailComponent implements OnInit {

  listBaiBao: any[] = [];
  listDeTai: any[] = [];
  listSach: any[] = [];
  listNam: string[] = [];
  curentYear = new Date().getFullYear();
  giaoVien: any;
  id: number;
  TongTai = 0;
  namHocSelcted = '0';
  kiHocSlected = 0;

  constructor(
    private giaoVienService: GiaoVienService,
    private baiBaoService: BaiBaoService,
    private deTaiService: DeTaiService,
    private sachService: SachService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
  ) { 
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationStart),
      tap(() => this.dialog.closeAll())
    ).subscribe();
  }

  ngOnInit() {

    this.route.queryParams
      .subscribe((params) => {
        if (params.id) {
          this.id = params.id;
        }
        this.getGiaoVienById();
        this.getListBaiBao();
        this.getListDeTai();
        this.getListSach();
      });

    for (let year = 2015; year < Number(this.curentYear); year++) {
      const yearStr = String(year) + '-' + String(year+1);
      this.listNam.push(yearStr);
    }
  }

  private getGiaoVienById(){
    this.giaoVienService.getGiaoVienById(this.id)
      .subscribe((res) => {
        this.giaoVien = res;
      })
  }

  private getListBaiBao(){
    this.baiBaoService.getBaiBaoByGiaoVien(this.id, this.namHocSelcted, this.kiHocSlected)
      .subscribe((res) => {
        this.listBaiBao = res;
      })
  }

  private getListDeTai(){
    this.deTaiService.getDeTaiByGiaoVien(this.id, this.namHocSelcted, this.kiHocSlected)
      .subscribe((res) => {
        this.listDeTai = res;
      })
  }

  private getListSach(){
    this.sachService.getSachByGiaoVien(this.id, this.namHocSelcted, this.kiHocSlected)
      .subscribe((res) => {
        this.listSach = res;
      })
  }

  onNamChange(year: any) {
    if(status !== undefined && status !== null && status !== ''){
      this.namHocSelcted = year;
    }
    else{
      this.namHocSelcted = '0';
    }

    this.getListBaiBao();
    this.getListDeTai();
    this.getListSach();
  }

  onKiHocChange(kiHoc: any) {
    if(status !== undefined && status !== null && status !== ''){
      this.kiHocSlected = kiHoc;
    }
    else{
      this.kiHocSlected = 0;
    }

    this.getListBaiBao();
    this.getListDeTai();
    this.getListSach();
  }

  viewbaibao(id: any) {
    this.router.navigateByUrl(`baibao-detail?id=${id}`);
  }

  viewdetai(id: any) {
    this.router.navigateByUrl(`detai-detail?id=${id}`);
  }

  viewsach(id: any) {
    this.router.navigateByUrl(`sach-detail?id=${id}`);
  }


}
