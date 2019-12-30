import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaiBaoService } from '../../services/baibao/baibao.service';
import { DeTaiService } from '../../services/detai/detai.service';
import { SachService } from '../../services/sach/sach.service';
import { NotificationService } from '../../services/notification.service';
import { Router, RouterEvent, NavigationStart } from '@angular/router';
import { filter, tap, take } from 'rxjs/operators';
import { SuccessTitle, ErrorTitle } from '../../enums/notification.enum';

@Component({
  selector: 'app-delete-member-dialog',
  templateUrl: './delete-member-dialog.component.html',
  styleUrls: ['./delete-member-dialog.component.scss']
})
export class DeleteMemberDialogComponent implements OnInit {

  action: string;
  Id: number;

  constructor(
    public dialogRef: MatDialogRef<DeleteMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private baiBaoService: BaiBaoService,
    private deTaiService: DeTaiService,
    private sachService: SachService,
    private notificationService: NotificationService,
    private router: Router,
    private ref: ElementRef,
  ) {

    // if data is not null, that's update profile user
    if (data !== null && data !== undefined) {
        this.action = data.action;

        if (data.id !== undefined) {
            this.Id = data.id;
        }
    }

    // Close dialog ref on route changes
    this.router.events.pipe(
        filter((event: RouterEvent) => event instanceof NavigationStart),
        tap(() => this.dialogRef.close()),
        take(1),
    ).subscribe();
  }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close(null);
  }

  submit() {
    if (this.action === 'baibao') {
      this.baiBaoService.deleteThanhVien(this.Id)
        .subscribe((res) => {
          if (res.status) {
            this.notificationService.showSuccess(res.message, SuccessTitle, 3000);
            this.dialogRef.close(true);
          }
          else if (res.status === false) {
            this.notificationService.showError(res.message, ErrorTitle, 3000);
          }
        });
    } else if (this.action === 'detai') {
      this.deTaiService.deleteThanhVien(this.Id)
        .subscribe((res) => {
          if (res.status === true) {
            this.notificationService.showSuccess(res.message, SuccessTitle, 3000);
            this.dialogRef.close(true);
          }
          else if (res.status === false) {
            this.notificationService.showError(res.message, ErrorTitle, 3000);
          }
        });
      
    } else {

      this.sachService.deleteThanhVien(this.Id)
        .subscribe((res) => {
          if (res.status === true) {
            this.notificationService.showSuccess(res.message, SuccessTitle, 3000);
            this.dialogRef.close(true);
          }
          else if (res.status === false) {
            this.notificationService.showError(res.message, ErrorTitle, 3000);
          }
        });
        
    }
  }

}
