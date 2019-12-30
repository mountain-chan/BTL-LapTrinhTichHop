import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationService } from '../../services/notification.service';
import { Router, RouterEvent, NavigationStart } from '@angular/router';
import { filter, tap, take } from 'rxjs/operators';
import { SuccessTitle, ErrorTitle } from '../../enums/notification.enum';
import { SachService } from '../../services/sach/sach.service';

@Component({
  selector: 'app-sach-dialog',
  templateUrl: './sach-dialog.component.html',
  styleUrls: ['./sach-dialog.component.scss']
})
export class SachDialogComponent implements OnInit {

  sachForm: FormGroup;
  action: string;
  sach: any;
  listLoai: any[] = [];
  listNam: string[] = [];
  Id: number;
  curentYear = new Date().getFullYear();
  
  constructor(
    public dialogRef: MatDialogRef<SachDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sachService: SachService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    // initial form
    this.sachForm = this.formBuilder.group({
      Ma: [''],
      Ten: ['', [Validators.minLength(1), Validators.maxLength(255)]],
      IdLoaiSach: [''],
      NoiXuatBan: ['', [Validators.minLength(1), Validators.maxLength(255)]],
      NamHoc: [''],
      KiHoc: ['']
    });

    // if data is not null, that's update profile user
    if (data !== null && data !== undefined) {
        this.action = data.action

        if (data.id !== undefined) {
            this.Id = data.id
            this.getSachById(this.Id)
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
    this.sachService.getLoaiSach()
      .subscribe((res) => {
        this.listLoai = res;
    });
    
    for (let year = 2015; year <= Number(this.curentYear); year++) {
      const yearStr = String(year) + '-' + String(year+1);
      this.listNam.push(yearStr);
    }

  }

  get f() {
    return this.sachForm.controls;
  }

  private getSachById(id: number) {
    this.sachService.getSachById(id)
      .subscribe((res) => {
        this.sach = res;
        this.setValueForm(this.sach);
      });
  }

  private setValueForm(sach: any) {
    this.sachForm.patchValue({
      Ma: sach.Ma,
      Ten: sach.Ten,
      IdLoaiSach: sach.IdLoaiSach,
      NoiXuatBan: sach.NoiXuatBan,
      NamHoc: sach.NamHoc,
      KiHoc: sach.KiHoc
    });
  }

  cancel() {
    this.dialogRef.close(null);
  }

  submit() {
    if (!this.sachForm.invalid) {
      
      if (this.action === 'create') {
        const data = {
          Ten: this.f.Ten.value.trim(),
          IdLoaiSach: this.f.IdLoaiSach.value,
          NoiXuatBan: this.f.NoiXuatBan.value.trim(),
          KiHoc: this.f.KiHoc.value,
          NamHoc: this.f.NamHoc.value
        }

        this.sachService.createSach(data)
          .subscribe((res) => {
            if (res.status) {
              this.notificationService.showSuccess(res.message, SuccessTitle, 3000);
              this.dialogRef.close(true);
            }
            else if (res.status === false) {
              this.notificationService.showError(res.message, ErrorTitle, 3000);
            }
        });

      } else if (this.action === 'update') {

        const data = {
          Id: this.Id,
          Ten: this.f.Ten.value.trim(),
          IdLoaiSach: this.f.IdLoaiSach.value,
          NoiXuatBan: this.f.NoiXuatBan.value.trim(),
          KiHoc: this.f.KiHoc.value,
          NamHoc: this.f.NamHoc.value
        }

        this.sachService.updateSach(data)
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

        this.sachService.deleteSach(this.Id)
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

  disableCreateButton() {
    return (this.f.Ten.value === undefined 
        || this.f.Ten.value === null 
        || this.f.Ten.value.toString().trim() === ''
        || this.f.IdLoaiSach.value === undefined 
        || this.f.IdLoaiSach.value === null 
        || this.f.IdLoaiSach.value.toString().trim() === ''
        || this.f.NoiXuatBan.value === undefined 
        || this.f.NoiXuatBan.value === null 
        || this.f.NoiXuatBan.value.toString().trim() === ''
        || this.f.NamHoc.value === undefined 
        || this.f.NamHoc.value === null 
        || this.f.NamHoc.value.toString().trim() === ''
        || this.f.KiHoc.value === undefined 
        || this.f.KiHoc.value === null 
        || this.f.KiHoc.value.toString().trim() === ''
        )
  }

  disableUpdateButton() {
    if (this.sach) {
        return this.disableCreateButton() 
          || (this.f.Ten.value.toString().trim() === this.sach.Ten
            && this.f.IdLoaiSach.value === this.sach.IdLoaiSach
            && this.f.NoiXuatBan.value === this.sach.NoiXuatBan
            && this.f.NamHoc.value === this.sach.NamHoc
            && this.f.KiHoc.value === this.sach.KiHoc)
    }
  }
}
