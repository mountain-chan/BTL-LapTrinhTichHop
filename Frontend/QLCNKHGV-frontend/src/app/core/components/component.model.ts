import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatDialogModule, MatDatepickerModule } from '@angular/material';
import { GiaovienDialogComponent } from './giaovien-dialog/giaovien-dialog.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BaibaoDialogComponent } from './baibao-dialog/baibao-dialog.component';
import { DetaiDialogComponent } from './detai-dialog/detai-dialog.component';
import { SachDialogComponent } from './sach-dialog/sach-dialog.component';
import { ThemtvDialogComponent } from './themtv-dialog/themtv-dialog.component';
import { DeleteMemberDialogComponent } from './delete-member-dialog/delete-member-dialog.component';

@NgModule({
  declarations: [
    GiaovienDialogComponent,
    BaibaoDialogComponent,
    DetaiDialogComponent,
    SachDialogComponent,
    ThemtvDialogComponent,
    DeleteMemberDialogComponent,
  ],
  imports: [
    // Core module
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Material Module
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    // Datetime Module
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ], 
  entryComponents: [
      GiaovienDialogComponent,
      BaibaoDialogComponent,
      DetaiDialogComponent,
      SachDialogComponent,
      ThemtvDialogComponent,
      DeleteMemberDialogComponent,
    ]
})
export class ComponentsModule { }
