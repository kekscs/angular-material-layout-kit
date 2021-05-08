import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// *** Angular Material
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { LayoutsModule } from './layouts/layouts.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DummyContentComponent } from './pages/dummy-content/dummy-content.component';
import { PseudoTextComponent } from './components/pseudo-text/pseudo-text.component';
import { PseudoTitleComponent } from './components/pseudo-title/pseudo-title.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DummyContentComponent,
    PseudoTextComponent,
    PseudoTitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
