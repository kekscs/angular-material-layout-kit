import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// *** Angular Material
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { LayoutsModule } from './layouts/layouts.module';

import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';
import { DummyPageContentComponent } from './components/dummy-page-content/dummy-page-content.component';
import { Layout101Page } from './pages/layout101/layout101.page';
import { Layout202Page } from './pages/layout202/layout202.page';
import { Layout203Page } from './pages/layout203/layout203.page';
import { Layout204Page } from './pages/layout204/layout204.page';


@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    DummyPageContentComponent,
    Layout101Page,
    Layout202Page,
    Layout203Page,
    Layout204Page
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDividerModule,
    MatCardModule,
    AppRoutingModule,
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
