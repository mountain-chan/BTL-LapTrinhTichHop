import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, NavigationStart, RouterEvent } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { GiaoVienService } from '../../services/giaovien/giaovien.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { filter, tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-themtv-dialog',
  templateUrl: './themtv-dialog.component.html',
  styleUrls: ['./themtv-dialog.component.scss']
})
export class ThemtvDialogComponent implements OnInit {

  IdGiaoVien: number;
  departmentForm: FormGroup;
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
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
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

  get f() {
    return this.departmentForm.controls;
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
    this.departmentForm.patchValue({
      tenGV: user.Ten,
      IdGiaoVien: user.Id
    });
  }

  focusManager() {
    this.focusManagerInput = true;
  }

  onTextChange(searchValue: string): void {  
    this.giaoVienService.searchGiaoVien(searchValue.toString().trim()).subscribe(data => {
      if (data.status === true) {
        this.suggestionListManagerUser = data;
        if (this.suggestionListManagerUser !== null && this.suggestionListManagerUser.length > 0) {
          this.isDropDownManager = true;
        }
      }
    });
  }

  disableCreateButton() {
    return (this.IdGiaoVien === undefined 
      || this.IdGiaoVien === null
      );
  }

}
