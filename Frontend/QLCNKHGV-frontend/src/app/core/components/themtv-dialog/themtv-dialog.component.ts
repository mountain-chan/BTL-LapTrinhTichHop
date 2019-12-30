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
      LaChuBien: ['']
    });

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

  get f() {
    return this.themTVForm.controls;
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
          IdBaiBao: this.Id,
          IdGiaoVien: this.f.IdGiaoVien.value,
          LaChuBien: this.f.LaChuBien
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
        
      } else {

        const data = {
          IdBaiBao: this.Id,
          IdGiaoVien: this.f.IdGiaoVien.value,
          SoTrangDaViet: this.f.SoTrangDaViet
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
          
      }
    } 
  }


  disableCreateButton() {
    if(this.action === 'detai'){
      return (this.f.IdGiaoVien.value === undefined 
        || this.f.IdGiaoVien.value === null 
        || this.f.IdGiaoVien.value === ''
        || this.f.LaChuBien.value === undefined
        || this.f.LaChuBien.value === ''
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

}
