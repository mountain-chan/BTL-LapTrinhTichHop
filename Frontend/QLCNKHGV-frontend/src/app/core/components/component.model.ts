import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatDialogModule } from '@angular/material';
import { GiaovienDialogComponent } from './giaovien-dialog/giaovien-dialog.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  declarations: [
    GiaovienDialogComponent
  ],
  imports: [
    // Core module
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Material Module
    MatIconModule,
    MatDialogModule,
    // Datetime Module
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ], 
  exports: [
      GiaovienDialogComponent
    ]
})
export class ComponentsModule { }
