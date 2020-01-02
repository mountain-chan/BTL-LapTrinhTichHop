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
  namHocSelcted = String(this.curentYear-1)+'-'+String(this.curentYear);
  kiHocSlected = 1;

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

    for (let year = Number(this.curentYear); year > 2015; year--) {
      const yearStr = String(year-1) + '-' + String(year);
      this.listNam.push(yearStr);
    }

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
        this.listBaiBao.forEach(obj => {
          this.TongTai = this.TongTai + obj.SoGio;
        });
      })

  }

  private getListDeTai(){
    this.deTaiService.getDeTaiByGiaoVien(this.id, this.namHocSelcted, this.kiHocSlected)
      .subscribe((res) => {
        this.listDeTai = res;
        this.listDeTai.forEach(obj => {
          this.TongTai = this.TongTai + obj.SoGio;
        });
      })
  }

  private getListSach(){
    this.sachService.getSachByGiaoVien(this.id, this.namHocSelcted, this.kiHocSlected)
      .subscribe((res) => {
        this.listSach = res;
        this.listSach.forEach(obj => {
          this.TongTai = this.TongTai + obj.SoGio;
        });
      })
  }

  onNamChange(year: any) {
    if(year !== undefined && year !== null && year !== ''){
      this.namHocSelcted = year;
    }
    this.TongTai = 0;
    this.getListBaiBao();
    this.getListDeTai();
    this.getListSach();
  }

  onKiHocChange(kiHoc: any) {
    if(kiHoc !== undefined && kiHoc !== null && kiHoc !== ''){
      this.kiHocSlected = kiHoc;
    }
    this.TongTai = 0;
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
