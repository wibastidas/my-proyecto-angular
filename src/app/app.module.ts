import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { TruncatePipe } from './pipes/truncate.pipe'

@NgModule({
declarations: [
AppComponent,
HomeComponent, 
TruncatePipe
],
imports: [
BrowserModule,
MatToolbarModule,
MatCardModule, 
MatListModule 
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { } 