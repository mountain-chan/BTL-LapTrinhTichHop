import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationService } from '../../services/notification.service';
import { Router, RouterEvent, NavigationStart } from '@angular/router';
import { filter, tap, take } from 'rxjs/operators';
import { SuccessTitle, ErrorTitle } from '../../enums/notification.enum';
import { BaiBaoService } from '../../services/baibao/baibao.service';

@Component({
  selector: 'app-baibao-dialog',
  templateUrl: './baibao-dialog.component.html',
  styleUrls: ['./baibao-dialog.component.scss']
})
export class BaibaoDialogComponent implements OnInit {

  baibaoForm: FormGroup;
  action: string;
  baibao: any;
  listLoai: any[] = [];
  listNam: string[] = [];
  Id: number;
  curentYear = new Date().getFullYear();
  
  constructor(
    public dialogRef: MatDialogRef<BaibaoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private baiBaoService: BaiBaoService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    // initial form
    this.baibaoForm = this.formBuilder.group({
      Ma: [''],
      Ten: ['', [Validators.minLength(1), Validators.maxLength(255)]],
      IdLoaiBaiBao: [''],
      TenTapChiCongBo: ['', [Validators.minLength(1), Validators.maxLength(255)]],
      NamHoc: [''],
      KiHoc: ['']
    });

    // if data is not null, that's update profile user
    if (data !== null && data !== undefined) {
        this.action = data.action

        if (data.id !== undefined) {
            this.Id = data.id
            this.getBaiBaoById(this.Id)
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
    this.baiBaoService.getLoaiBaiBao()
      .subscribe((res) => {
        this.listLoai = res;
    });
    
    for (let year = Number(this.curentYear); year > 2015; year--) {
      const yearStr = String(year-1) + '-' + String(year);
      this.listNam.push(yearStr);
    }

  }

  get f() {
    return this.baibaoForm.controls;
  }

  private getBaiBaoById(id: number) {
    this.baiBaoService.getBaiBaoById(id)
      .subscribe((res) => {
        this.baibao = res;
        this.setValueForm(this.baibao);
      });
  }

  private setValueForm(baibao: any) {
    this.baibaoForm.patchValue({
      Ma: baibao.Ma,
      Ten: baibao.Ten,
      IdLoaiBaiBao: baibao.IdLoaiBaiBao,
      KiHoc: baibao.KiHoc,
      TenTapChiCongBo: baibao.TenTapChiCongBo,
      NamHoc: baibao.NamHoc
    });
  }

  cancel() {
    this.dialogRef.close(null);
  }

  submit() {
    if (!this.baibaoForm.invalid) {
      
      if (this.action === 'create') {
        const data = {
          Ten: this.f.Ten.value.trim(),
          IdLoaiBaiBao: this.f.IdLoaiBaiBao.value,
          TenTapChiCongBo: this.f.TenTapChiCongBo.value.trim(),
          KiHoc: this.f.KiHoc.value,
          NamHoc: this.f.NamHoc.value,
          SoThanhVien: 0
        }
        this.baiBaoService.createBaiBao(data)
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
          Id: this.Id,
          Ten: this.f.Ten.value.trim(),
          IdLoaiBaiBao: this.f.IdLoaiBaiBao.value,
          TenTapChiCongBo: this.f.TenTapChiCongBo.value.trim(),
          KiHoc: this.f.KiHoc.value,
          NamHoc: this.f.NamHoc.value
        }

        this.baiBaoService.updateBaiBao(data)
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

        this.baiBaoService.deleteBaiBao(this.Id)
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
        || this.f.IdLoaiBaiBao.value === undefined 
        || this.f.IdLoaiBaiBao.value === null 
        || this.f.IdLoaiBaiBao.value.toString().trim() === ''
        || this.f.TenTapChiCongBo.value === undefined 
        || this.f.TenTapChiCongBo.value === null 
        || this.f.TenTapChiCongBo.value.toString().trim() === ''
        || this.f.NamHoc.value === undefined 
        || this.f.NamHoc.value === null 
        || this.f.NamHoc.value.toString().trim() === ''
        || this.f.KiHoc.value === undefined 
        || this.f.KiHoc.value === null 
        || this.f.KiHoc.value.toString().trim() === ''
        )
  }

  disableUpdateButton() {
    if (this.baibao) {
        return this.disableCreateButton() 
          || (this.f.Ten.value.toString().trim() === this.baibao.Ten
            && this.f.IdLoaiBaiBao.value === this.baibao.IdLoaiBaiBao
            && this.f.TenTapChiCongBo.value === this.baibao.TenTapChiCongBo
            && this.f.NamHoc.value === this.baibao.NamHoc
            && this.f.KiHoc.value === this.baibao.KiHoc)
    }
  }
}
