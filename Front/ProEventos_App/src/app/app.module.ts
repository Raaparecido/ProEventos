import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { Routes } from '@angular/router';
import { ɵBrowserAnimationBuilder } from '@angular/animations';
 
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    EventosComponent,
    PalestrantesComponent,
    RouterModule,
  ],
  declarations: [
    AppComponent
   
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }