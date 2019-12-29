import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard.module';
import { LayoutModule } from './layouts/layout.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './core/components/component.model';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    
    //notification model
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

    //main module
    AppRoutingModule,
    LayoutModule,
    DashboardModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
