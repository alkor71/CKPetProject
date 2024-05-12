import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PCComponent } from './PC/PC.component';
import {PLayStationComponent } from './PlayStation/PlayStation.component';
import { XBoxComponent } from './X-Box/X-Box.component';

@NgModule({
  declarations: [
    AppComponent,
    PCComponent,
    PLayStationComponent,
    XBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }