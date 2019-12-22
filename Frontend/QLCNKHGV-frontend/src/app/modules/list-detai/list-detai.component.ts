import { Component, OnInit } from '@angular/core';
import { VariablesConstant } from 'src/app/core/constants/variables.constant';
import { GiaoVienService } from 'src/app/core/services/giaovien/giaovien.service';
import { ActivatedRoute, Router, RouterEvent, NavigationStart } from '@angular/router';
import { MatDialog, PageEvent } from '@angular/material';
import { filter, tap } from 'rxjs/operators';
import { updatePageSizeConfig } from 'src/app/core/helper/app.helper';
import { PAGE_SIZE_CONFIG, LIST_GIAOVIEN } from 'src/app/core/enums/variables.enum';
import { GiaovienDialogComponent } from 'src/app/core/components/giaovien-dialog/giaovien-dialog.component';

@Component({
  selector: 'app-list-detai',
  templateUrl: './list-detai.component.html',
  styleUrls: ['./list-detai.component.scss']
})
export class ListDetaiComponent implements OnInit {

  listDeTai: any[] = [];
  listNam: number[] = [];
  pageSize = VariablesConstant.PAGE_SIZE;
  pageNumber = VariablesConstant.PAGE_NUMBER;
  totalItems: number;
  pageSizeConfig: any;
  namHocSelcted = 0;
  kiHocSlected = 0;
  curentYear = new Date().getFullYear();
  
  constructor(
    private giaoVienService: GiaoVienService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
  ) {

    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationStart),
      tap(() => this.dialog.closeAll())
    ).subscribe();
    
    updatePageSizeConfig();

  }

  ngOnInit() {
    this.pageSizeConfig = localStorage.getItem(PAGE_SIZE_CONFIG);
    this.pageSize = JSON.parse(this.pageSizeConfig)[LIST_GIAOVIEN];
    this.route.queryParams
      .subscribe((params) => {
        if (params.page_size) {
          this.pageSize = params.page_size;
        }
        if (params.page_number) {
          this.pageNumber = params.page_number;
        }
        this.getlistDeTai();
    });

    for (let year = 2015; year <= Number(this.curentYear); year++) {
      this.listNam.push(year);
    }

  }

  private getlistDeTai() {
    this.giaoVienService.getAllGiaoVien(this.pageSize, this.pageNumber)
      .subscribe((res) => {
        this.listDeTai = res.items;
        this.totalItems = res.totals;
      });
  }

  openDialogGroup(action: string, idGiaoVien?: any) {
    const dialogRef = this.dialog.open(GiaovienDialogComponent, {
      width: '600px',
      closeOnNavigation: true,
      data: {
        action,
        idGiaoVien
      }
    });
    dialogRef.afterClosed()
      .subscribe((data) => {
        if (data !== null && data !== undefined) {
          if (data === true) {
            this.getlistDeTai();
          }
        }
      });
  }

  onNamChange(year: any) {
    if(status !== undefined && status !== null && status !== ''){
      this.namHocSelcted = year;
    }
    else{
      this.namHocSelcted = 0;
    }

    this.giaoVienService.getGiaoVienByBoMon(1, this.pageSize, this.pageNumber)
      .subscribe((res) => {
        this.listDeTai = res.items;
        this.totalItems = res.totals;
      });
  }

  onKiHocChange(kiHoc: any) {
    if(status !== undefined && status !== null && status !== ''){
      this.kiHocSlected = kiHoc;
    }
    else{
      this.kiHocSlected = 0;
    }

    this.giaoVienService.getGiaoVienByBoMon(1, this.pageSize, this.pageNumber)
      .subscribe((res) => {
        this.listDeTai = res.items;
        this.totalItems = res.totals;
      });
  }

  pageSizeChange($event: PageEvent) {
    updatePageSizeConfig(LIST_GIAOVIEN, $event.pageSize);
    return this.router.navigateByUrl(`/list-giaovien?page_number=${$event.pageIndex}&page_size=${$event.pageSize}`);
  }


}
