import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    FooterComponent,
    NavigationComponent,
    TopnavbarComponent
  ],
  exports: [
    FooterComponent,
    NavigationComponent,
    TopnavbarComponent
  ]
})
export class LayoutModule {
}
