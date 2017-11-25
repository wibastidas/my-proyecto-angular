import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
@NgModule({
declarations: [
AppComponent,
HomeComponent
],
imports: [
BrowserModule,
MatToolbarModule,
MatCardModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }