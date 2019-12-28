import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationService } from '../../services/notification.service';
import { Router, RouterEvent, NavigationStart } from '@angular/router';
import { filter, tap, take } from 'rxjs/operators';
import { SuccessTitle, ErrorTitle } from '../../enums/notification.enum';
import { DeTaiService } from '../../services/detai/detai.service';

@Component({
  selector: 'app-detai-dialog',
  templateUrl: './detai-dialog.component.html',
  styleUrls: ['./detai-dialog.component.scss']
})
export class DetaiDialogComponent implements OnInit {

  detaiForm: FormGroup;
  action: string;
  detai: any;
  listLoai: any[] = [];
  listNam: string[] = [];
  Id: number;
  curentYear = new Date().getFullYear();
  
  constructor(
    public dialogRef: MatDialogRef<DetaiDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private deTaiService: DeTaiService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    // initial form
    this.detaiForm = this.formBuilder.group({
      Ma: [''],
      Ten: ['', [Validators.minLength(1), Validators.maxLength(255)]],
      IdLoai: [''],
      CoQuanQuanLy: ['', [Validators.minLength(1), Validators.maxLength(255)]],
      NamHoc: [String(this.curentYear-1)+'-'+String(this.curentYear)],
      KiHoc: ['']
    });

    // if data is not null, that's update profile user
    if (data !== null && data !== undefined) {
        this.action = data.action

        if (data.id !== undefined) {
            this.Id = data.id
            this.getDeTaiById(this.Id)
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
    this.deTaiService.getLoaiDeTai()
      .subscribe((res) => {
        this.listLoai = res;
    });
    
    for (let year = 2015; year < Number(this.curentYear); year++) {
      const yearStr = String(year) + '-' + String(year+1);
      this.listNam.push(yearStr);
    }

  }

  get f() {
    return this.detaiForm.controls;
  }

  private getDeTaiById(id: number) {
    this.deTaiService.getDeTaiById(id)
      .subscribe((res) => {
        this.detai = res;
        this.setValueForm(this.detai);
      });
  }

  private setValueForm(detai: any) {
    this.detaiForm.patchValue({
      Ma: detai.Ma,
      Ten: detai.Ten,
      IdLoai: detai.IdLoai,
      CoQuanQuanLy: detai.CoQuanQuanLy,
      NamHoc: detai.NamHoc,
      KiHoc: detai.KiHoc
    });
  }

  cancel() {
    this.dialogRef.close(null);
  }

  submit() {
    if (!this.detaiForm.invalid) {
      
      if (this.action === 'create') {
        const data = {
          Ten: this.f.Ten.value.trim(),
          IdLoai: this.f.IdLoai.value,
          CoQuanQuanLy: this.f.CoQuanQuanLy.value.trim(),
          KiHoc: this.f.KiHoc.value,
          NamHoc: this.f.NamHoc.value
        }

        this.deTaiService.createDeTai(data)
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
          IdLoai: this.f.IdLoai.value,
          CoQuanQuanLy: this.f.CoQuanQuanLy.value.trim(),
          KiHoc: this.f.KiHoc.value,
          NamHoc: this.f.NamHoc.value
        }

        this.deTaiService.updateDeTai(data)
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

        this.deTaiService.deleteDeTai(this.Id)
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
        || this.f.IdLoai.value === undefined 
        || this.f.IdLoai.value === null 
        || this.f.IdLoai.value.toString().trim() === ''
        || this.f.CoQuanQuanLy.value === undefined 
        || this.f.CoQuanQuanLy.value === null 
        || this.f.CoQuanQuanLy.value.toString().trim() === ''
        || this.f.NamHoc.value === undefined 
        || this.f.NamHoc.value === null 
        || this.f.NamHoc.value.toString().trim() === ''
        || this.f.KiHoc.value === undefined 
        || this.f.KiHoc.value === null 
        || this.f.KiHoc.value.toString().trim() === ''
        )
  }

  disableUpdateButton() {
    if (this.detai) {
        return this.disableCreateButton() 
          || (this.f.Ten.value.toString().trim() === this.detai.Ten
            && this.f.IdLoai.value === this.detai.IdLoai
            && this.f.CoQuanQuanLy.value === this.detai.CoQuanQuanLy
            && this.f.NamHoc.value === this.detai.NamHoc
            && this.f.KiHoc.value === this.detai.KiHoc)
    }
  }

}
