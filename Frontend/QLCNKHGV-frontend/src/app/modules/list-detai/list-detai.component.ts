import { Component, OnInit } from '@angular/core';
import { VariablesConstant } from 'src/app/core/constants/variables.constant';
import { ActivatedRoute, Router, RouterEvent, NavigationStart } from '@angular/router';
import { MatDialog, PageEvent } from '@angular/material';
import { filter, tap } from 'rxjs/operators';
import { updatePageSizeConfig } from 'src/app/core/helper/app.helper';
import { PAGE_SIZE_CONFIG, LIST_DETAI } from 'src/app/core/enums/variables.enum';
import { DetaiDialogComponent } from 'src/app/core/components/detai-dialog/detai-dialog.component';
import { DeTaiService } from 'src/app/core/services/detai/detai.service';

@Component({
  selector: 'app-list-detai',
  templateUrl: './list-detai.component.html',
  styleUrls: ['./list-detai.component.scss']
})
export class ListDetaiComponent implements OnInit {

  listDeTai: any[] = [];
  listNam: string[] = [];
  pageSize = VariablesConstant.PAGE_SIZE;
  pageNumber = VariablesConstant.PAGE_NUMBER;
  totalItems: number;
  pageSizeConfig: any;
  namHocSelcted = '0';
  kiHocSlected = 0;
  curentYear = new Date().getFullYear();
  
  constructor(
    private deTaiService: DeTaiService,
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
    this.pageSize = JSON.parse(this.pageSizeConfig)[LIST_DETAI];
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
      const yearStr = String(year) + '-' + String(year+1);
      this.listNam.push(yearStr);
    }

  }

  private getlistDeTai() {
    this.deTaiService.getAllDeTai(this.pageSize, this.pageNumber)
      .subscribe((res) => {
        this.listDeTai = res.items;
        this.totalItems = res.totals;
      });
  }

  openDialog(action: string, id?: any) {
    const dialogRef = this.dialog.open(DetaiDialogComponent, {
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
      this.namHocSelcted = '0';
    }

    this.deTaiService.getDeTaiByKi(this.namHocSelcted, this.kiHocSlected, this.pageSize, this.pageNumber)
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

    this.deTaiService.getDeTaiByKi(this.namHocSelcted, this.kiHocSlected, this.pageSize, this.pageNumber)
      .subscribe((res) => {
        this.listDeTai = res.items;
        this.totalItems = res.totals;
      });
  }

  viewdetai(id: any) {
    this.router.navigateByUrl(`detai-detail?id=${id}`);
  }

  pageSizeChange($event: PageEvent) {
    updatePageSizeConfig(LIST_DETAI, $event.pageSize);
    return this.router.navigateByUrl(`/list-detai?page_number=${$event.pageIndex}&page_size=${$event.pageSize}`);
  }


}
