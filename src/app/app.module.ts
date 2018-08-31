import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxImageZoomModule } from 'ngx-image-zoom';
import {ImageZoomModule} from 'angular2-image-zoom';

import { AppComponent } from './app.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { ConfirmArrangeDialog } from "./impl/confirm-arrange.dialog/confirm-arrange.dialog";

@NgModule({
  declarations: [
    AppComponent,
    ImageViewComponent,
    ConfirmArrangeDialog
  ],
  entryComponents: [AppComponent, ConfirmArrangeDialog],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,    
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ImageZoomModule,
    NgxImageZoomModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
