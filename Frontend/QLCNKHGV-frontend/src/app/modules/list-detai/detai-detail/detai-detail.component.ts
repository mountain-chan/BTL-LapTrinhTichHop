import { Component, OnInit } from '@angular/core';
import { ThemtvDialogComponent } from 'src/app/core/components/themtv-dialog/themtv-dialog.component';
import { GiaoVienService } from 'src/app/core/services/giaovien/giaovien.service';
import { ActivatedRoute, Router, NavigationStart, RouterEvent } from '@angular/router';
import { MatDialog } from '@angular/material';
import { filter, tap } from 'rxjs/operators';
import { DeTaiService } from 'src/app/core/services/detai/detai.service';

@Component({
  selector: 'app-detai-detail',
  templateUrl: './detai-detail.component.html',
  styleUrls: ['./detai-detail.component.scss']
})
export class DetaiDetailComponent implements OnInit {

  listGiaoVien: any[] = [];
  detai: any;
  id: number;

  constructor(
    private giaoVienService: GiaoVienService,
    private deTaiService: DeTaiService,
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
        this.getDeTaiById();
        this.getListGiaoVien();
      });
    
  }

  private getDeTaiById(){
    this.deTaiService.getDeTaiById(this.id)
      .subscribe((res) => {
        this.detai = res;
      })
  }

  private getListGiaoVien() {
    this.giaoVienService.getGiaoVienByBaiBao(this.id)
      .subscribe((res) => {
        this.listGiaoVien = res.items;
      });
  }

  openDialog(action: string) {
    const dialogRef = this.dialog.open(ThemtvDialogComponent, {
      width: '600px',
      closeOnNavigation: true,
      data: {
        action,
        id : this.detai.Id
      }
    });
    dialogRef.afterClosed()
      .subscribe((data) => {
        if (data !== null && data !== undefined) {
          if (data === true) {
            this.getListGiaoVien();
          }
        }
      });
  }

  viewgiaovien(id: any) {
    this.router.navigateByUrl(`giaovien-detail?id=${id}`);
  }

}
