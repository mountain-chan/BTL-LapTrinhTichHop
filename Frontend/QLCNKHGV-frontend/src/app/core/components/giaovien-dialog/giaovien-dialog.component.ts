import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GiaoVienService } from '../../services/giaovien/giaovien.service';
import { NotificationService } from '../../services/notification.service';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter, take, tap, debounceTime } from 'rxjs/operators';
import { SuccessTitle, ErrorTitle } from '../../enums/notification.enum';
import { BoMonService } from '../../services/bomon/bomon.service';
import * as moment from 'moment';

@Component({
  selector: 'app-giaovien-dialog',
  templateUrl: './giaovien-dialog.component.html',
  styleUrls: ['./giaovien-dialog.component.scss']
})
export class GiaovienDialogComponent implements OnInit {

  giaovienForm: FormGroup;
  action: string;
  giaovien: any;
  listBoMon: any[] = [];
  idGiaoVien: number;
  
  constructor(
    public dialogRef: MatDialogRef<GiaovienDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private giaoVienService: GiaoVienService,
    private boMonService: BoMonService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    // initial form
    this.giaovienForm = this.formBuilder.group({
      maGiaoVien: [''],
      tenGiaoVien: ['', [Validators.minLength(1), Validators.maxLength(255)]],
      idBoMon: [''],
      gioiTinh: [true],
      ngaySinh: [new Date(2000, 1, 1)],
      diaChi: ['', [Validators.minLength(1), Validators.maxLength(255)]],
      soDienThoai: [''],
      email: ['']
    });

    // if data is not null, that's update profile user
    if (data !== null && data !== undefined) {
        this.action = data.action

        if (data.idGiaoVien !== undefined) {
            this.idGiaoVien = data.idGiaoVien
            this.getGiaoVienById(this.idGiaoVien)
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
    this.boMonService.getAllBoMon()
      .subscribe((res) => {
        this.listBoMon = res;
      });
  }

  get f() {
    return this.giaovienForm.controls;
  }

  private getGiaoVienById(id: number) {
    this.giaoVienService.getGiaoVienById(id)
      .subscribe((res) => {
        this.giaovien = res;
        this.setValueForm(this.giaovien);
      });
  }

  private setValueForm(giaovien: any) {
    this.giaovienForm.patchValue({
      maGiaoVien: giaovien.Ma,
      tenGiaoVien: giaovien.Ten,
      idBoMon: giaovien.IdBoMon,
      gioiTinh: giaovien.GioiTinh,
      ngaySinh: giaovien.NgaySinh,
      diaChi: giaovien.DiaChi,
      soDienThoai: giaovien.DienThoai,
      email: giaovien.Email,
    });
  }

  cancel() {
    this.dialogRef.close(null);
  }

  submit() {
    if (!this.giaovienForm.invalid) {
      const ngaySinh = moment(this.f.ngaySinh.value).format('YYYY-MM-DD');
      if (this.action === 'create') {
        const data = {
          Ten: this.f.tenGiaoVien.value.trim(),
          IdBoMon: this.f.idBoMon.value,
          GioiTinh: this.f.gioiTinh.value,
          NgaySinh: ngaySinh,
          DiaChi: this.f.diaChi.value.trim(),
          DienThoai: this.f.soDienThoai.value.trim(),
          Email: this.f.email.value.trim()
        }
        this.giaoVienService.createGiaoVien(data)
          .subscribe((res) => {
            if (res.status) {
              this.notificationService.showSuccess(res.message, SuccessTitle, 3000);
              this.dialogRef.close(true);
            }
            else if (res.status === false) {
              this.notificationService.showError(res.message, ErrorTitle, 3000);
            }
          })
      } else if (this.action === 'update') {

        const data = {
          Id: this.idGiaoVien,
          Ten: this.f.tenGiaoVien.value.trim(),
          IdBoMon: this.f.idBoMon.value,
          GioiTinh: this.f.gioiTinh.value,
          NgaySinh: ngaySinh,
          DiaChi: this.f.diaChi.value.trim(),
          DienThoai: this.f.soDienThoai.value.trim(),
          Email: this.f.email.value.trim()
        }

        this.giaoVienService.updateGiaoVien(data)
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

        this.giaoVienService.deleteGiaoVien(this.idGiaoVien)
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
    return (this.f.tenGiaoVien.value === undefined 
        || this.f.tenGiaoVien.value === null 
        || this.f.tenGiaoVien.value.toString().trim() === ''
        || this.f.idBoMon.value === undefined 
        || this.f.idBoMon.value === null 
        || this.f.idBoMon.value.toString().trim() === ''
        || this.f.diaChi.value === undefined 
        || this.f.diaChi.value === null 
        || this.f.diaChi.value.toString().trim() === ''
        || this.f.email.value === undefined 
        || this.f.email.value === null 
        || this.f.email.value.toString().trim() === ''
        )
  }

  disableUpdateButton() {
    if (this.giaovien) {
        return this.disableCreateButton() 
          || (this.f.tenGiaoVien.value.toString().trim() === this.giaovien.Ten
            && this.f.idBoMon.value === this.giaovien.IdBoMon
            && this.f.diaChi.value === this.giaovien.DiaChi
            && this.f.email.value === this.giaovien.Email
            && this.f.gioiTinh.value === this.giaovien.GioiTinh
            && this.f.ngaySinh.value === this.giaovien.NgaySinh
            && this.f.soDienThoai.value === this.giaovien.DienThoai)
    }
  }

}
