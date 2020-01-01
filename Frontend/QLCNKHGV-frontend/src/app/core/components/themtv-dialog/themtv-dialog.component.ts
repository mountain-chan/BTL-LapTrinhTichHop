import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, NavigationStart, RouterEvent } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { GiaoVienService } from '../../services/giaovien/giaovien.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { filter, tap, take } from 'rxjs/operators';
import { BaiBaoService } from '../../services/baibao/baibao.service';
import { DeTaiService } from '../../services/detai/detai.service';
import { SachService } from '../../services/sach/sach.service';
import { SuccessTitle, ErrorTitle } from '../../enums/notification.enum';

@Component({
  selector: 'app-themtv-dialog',
  templateUrl: './themtv-dialog.component.html',
  styleUrls: ['./themtv-dialog.component.scss']
})
export class ThemtvDialogComponent implements OnInit {

  themTVForm: FormGroup;
  action: string;
  isDropDownManager = false;
  focusManagerInput = false;
  isFormChange = false;
  suggestionListManagerUser: any[] = [];
  Id: number;
  laChuTri: number;
  SoTrangDaViet: number;
  tenGV: string;

  constructor(
    public dialogRef: MatDialogRef<ThemtvDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private giaoVienService: GiaoVienService,
    private baiBaoService: BaiBaoService,
    private deTaiService: DeTaiService,
    private sachService: SachService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private ref: ElementRef,
  ) {

    // initial form
    this.themTVForm = this.formBuilder.group({
      IdGiaoVien: [''],
      tenGV: [''],
      SoTrangDaViet: [''],
      LaChuTri: ['']
    });

    // if data is not null, that's update profile user
    if (data !== null && data !== undefined) {
      this.action = data.action;

      if (data.id !== undefined) {
          this.Id = data.id;
      }

      if (data.laChuTri !== undefined) {
        this.laChuTri = data.laChuTri;
      }

      if (data.SoTrangDaViet !== undefined) {
        this.SoTrangDaViet = data.SoTrangDaViet;
      }

      if (data.tenGV !== undefined) {
        this.tenGV = data.tenGV;
      }

      this.setValueForm();
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

  get f() {
    return this.themTVForm.controls;
  }

  private setValueForm() {
    this.themTVForm.patchValue({
      tenGV: this.tenGV,
      SoTrangDaViet: this.SoTrangDaViet,
      LaChuTri: this.laChuTri
    });
  }

  cancel() {
    this.dialogRef.close(null);
  }

  onClickOutSide($event: MouseEvent) {
    if (this.ref.nativeElement.contains($event.target)) {
      this.isDropDownManager = false;
    }
  }

  chooseManager(user: any) {
    // set focus incomer
    this.focusManagerInput = false;

    this.isDropDownManager = false;
    this.themTVForm.patchValue({
      tenGV: user.Ten,
      IdGiaoVien: user.Id
    });
  }

  focusManager() {
    this.focusManagerInput = true;
  }

  onTextChange(searchValue: string): void {  
    this.giaoVienService.searchGiaoVien(searchValue.toString().trim()).subscribe(data => {
      this.suggestionListManagerUser = data;
      if (this.suggestionListManagerUser !== null && this.suggestionListManagerUser.length > 0) {
        this.isDropDownManager = true;
      }
    });
  }

  submit() {
    if (!this.themTVForm.invalid) {
      if (this.action === 'baibao') {
        const data = {
          IdBaiBao: this.Id,
          IdGiaoVien: this.f.IdGiaoVien.value,
        }
        this.baiBaoService.themThanhVien(data)
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

        const data = {
          IdDeTai: this.Id,
          IdGiaoVien: this.f.IdGiaoVien.value,
          LaChuTri: Number(this.f.LaChuTri.value)
        }

        this.deTaiService.themThanhVien(data)
          .subscribe((res) => {
            if (res.status === true) {
              this.notificationService.showSuccess(res.message, SuccessTitle, 3000);
              this.dialogRef.close(true);
            }
            else if (res.status === false) {
              this.notificationService.showError(res.message, ErrorTitle, 3000);
            }
          });
        
      } else if (this.action === 'sach') {

        const data = {
          IdSach: this.Id,
          IdGiaoVien: this.f.IdGiaoVien.value,
          SoTrangDaViet: this.f.SoTrangDaViet.value
        }

        this.sachService.themThanhVien(data)
          .subscribe((res) => {
            if (res.status === true) {
              this.notificationService.showSuccess(res.message, SuccessTitle, 3000);
              this.dialogRef.close(true);
            }
            else if (res.status === false) {
              this.notificationService.showError(res.message, ErrorTitle, 3000);
            }
          });
          
      } else if (this.action === 'update-detai') {

        const data = {
          Id: this.Id,
          LaChuTri: Number(this.f.LaChuTri.value)
        }

        this.deTaiService.suaThanhVien(data)
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

        const data = {
          Id: this.Id,
          SoTrangDaViet: this.f.SoTrangDaViet.value
        }

        this.sachService.suaThanhVien(data)
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
    if(this.action === 'detai'){
      return (this.f.IdGiaoVien.value === undefined 
        || this.f.IdGiaoVien.value === null 
        || this.f.IdGiaoVien.value === ''
        || this.f.LaChuTri.value === undefined
        || this.f.LaChuTri.value === ''
        );
    }
    
    if(this.action === 'sach'){
      return (this.f.IdGiaoVien.value === undefined 
        || this.f.IdGiaoVien.value === null 
        || this.f.IdGiaoVien.value === ''
        || this.f.SoTrangDaViet.value === undefined
        || this.f.SoTrangDaViet.value === ''
        );
    }

    return (this.f.IdGiaoVien.value === undefined 
      || this.f.IdGiaoVien.value === null || this.f.IdGiaoVien.value === ''
      );
  }

  disableUpdateButton() {
    if(this.action === 'detai'){
      return (this.f.laChuTri.value === undefined
        || this.f.LaChuTri.value === ''
        || this.f.LaChuTri.value === this.laChuTri
        );
    }
    
    if(this.action === 'sach'){
      return (this.f.SoTrangDaViet.value === undefined
        || this.f.SoTrangDaViet.value === ''
        || this.f.SoTrangDaViet.value === this.SoTrangDaViet
        );
    }
  }

}
