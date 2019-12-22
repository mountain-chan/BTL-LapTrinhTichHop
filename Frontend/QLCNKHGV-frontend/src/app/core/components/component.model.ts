import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatDialogModule, MatDatepickerModule } from '@angular/material';
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
    MatDatepickerModule,
    // Datetime Module
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ], 
  entryComponents: [
      GiaovienDialogComponent
    ]
})
export class ComponentsModule { }
