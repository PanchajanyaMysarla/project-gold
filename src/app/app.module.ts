import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';

import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      AppRoutingModule,
      HeaderModule,
      ScrollPanelModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
