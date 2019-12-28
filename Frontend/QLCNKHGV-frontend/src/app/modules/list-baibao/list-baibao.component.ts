import { Component, OnInit } from '@angular/core';
import { VariablesConstant } from 'src/app/core/constants/variables.constant';
import { ActivatedRoute, Router, NavigationStart, RouterEvent } from '@angular/router';
import { MatDialog, PageEvent } from '@angular/material';
import { filter, tap } from 'rxjs/operators';
import { PAGE_SIZE_CONFIG, LIST_BAIBAO } from 'src/app/core/enums/variables.enum';
import { updatePageSizeConfig } from 'src/app/core/helper/app.helper';
import { BaibaoDialogComponent } from 'src/app/core/components/baibao-dialog/baibao-dialog.component';
import { BaiBaoService } from 'src/app/core/services/baibao/baibao.service';

@Component({
  selector: 'app-list-baibao',
  templateUrl: './list-baibao.component.html',
  styleUrls: ['./list-baibao.component.scss']
})
export class ListBaibaoComponent implements OnInit {

  listBaiBao: any[] = [];
  listNam: string[] = [];
  pageSize = VariablesConstant.PAGE_SIZE;
  pageNumber = VariablesConstant.PAGE_NUMBER;
  totalItems: number;
  pageSizeConfig: any;
  namHocSelcted = 0;
  kiHocSlected = 0;
  curentYear = new Date().getFullYear();
  
  constructor(
    private baiBaoService: BaiBaoService,
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
    this.pageSize = JSON.parse(this.pageSizeConfig)[LIST_BAIBAO];
    this.route.queryParams
      .subscribe((params) => {
        if (params.page_size) {
          this.pageSize = params.page_size;
        }
        if (params.page_number) {
          this.pageNumber = params.page_number;
        }
        this.getlistBaiBao();
    });

    for (let year = 2015; year < Number(this.curentYear); year++) {
      const yearStr = String(year) + '-' + String(year+1);
      this.listNam.push(yearStr);
    }

  }

  private getlistBaiBao() {
    this.baiBaoService.getAllBaiBao(this.pageSize, this.pageNumber)
      .subscribe((res) => {
        this.listBaiBao = res.items;
        this.totalItems = res.totals;
      });
  }

  openDialog(action: string, id?: any) {
    const dialogRef = this.dialog.open(BaibaoDialogComponent, {
      width: '600px',
      closeOnNavigation: true,
      data: {
        action,
        id
      }
    });
    dialogRef.afterClosed()
      .subscribe((data) => {
        if (data !== null && data !== undefined) {
          if (data === true) {
            this.getlistBaiBao();
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

    this.baiBaoService.getBaiBaoByKi(this.namHocSelcted, this.kiHocSlected, this.pageSize, this.pageNumber)
      .subscribe((res) => {
        this.listBaiBao = res.items;
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

    this.baiBaoService.getBaiBaoByKi(this.namHocSelcted, this.kiHocSlected, this.pageSize, this.pageNumber)
      .subscribe((res) => {
        this.listBaiBao = res.items;
        this.totalItems = res.totals;
      });
  }

  viewbaibao(id: any) {
    this.router.navigateByUrl(`baibao-detail?id=${id}`);
  }

  pageSizeChange($event: PageEvent) {
    updatePageSizeConfig(LIST_BAIBAO, $event.pageSize);
    return this.router.navigateByUrl(`/list-baibao?page_number=${$event.pageIndex}&page_size=${$event.pageSize}`);
  }

}
