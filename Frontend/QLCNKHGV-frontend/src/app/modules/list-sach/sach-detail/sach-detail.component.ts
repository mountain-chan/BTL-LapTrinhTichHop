import { Component, OnInit } from '@angular/core';
import { ThemtvDialogComponent } from 'src/app/core/components/themtv-dialog/themtv-dialog.component';
import { NavigationStart, RouterEvent, ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { filter, tap } from 'rxjs/operators';
import { GiaoVienService } from 'src/app/core/services/giaovien/giaovien.service';
import { SachService } from 'src/app/core/services/sach/sach.service';
import { DeleteMemberDialogComponent } from 'src/app/core/components/delete-member-dialog/delete-member-dialog.component';

@Component({
  selector: 'app-sach-detail',
  templateUrl: './sach-detail.component.html',
  styleUrls: ['./sach-detail.component.scss']
})
export class SachDetailComponent implements OnInit {

  listGiaoVien: any[] = [];
  sach: any;
  id: number

  constructor(
    private giaoVienService: GiaoVienService,
    private sachSerVice: SachService,
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
        this.getSachById();
        this.getListGiaoVien();
      });
    
  }

  private getListGiaoVien() {
    this.giaoVienService.getGiaoVienByBaiBao(this.id)
      .subscribe((res) => {
        this.listGiaoVien = res.items;
      });
  }

  private getSachById(){
    this.sachSerVice.getSachById(this.id)
      .subscribe((res) => {
        this.sach = res;
      })
  }

  openDialog(action: string, id: number, SoTrangDaViet: number) {
    const dialogRef = this.dialog.open(ThemtvDialogComponent, {
      width: '600px',
      closeOnNavigation: true,
      data: {
        action,
        id,
        SoTrangDaViet
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

  openDialogDelete(action: string, id: number) {
    const dialogRef = this.dialog.open(DeleteMemberDialogComponent, {
      width: '600px',
      closeOnNavigation: true,
      data: {
        action,
        id : id
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
