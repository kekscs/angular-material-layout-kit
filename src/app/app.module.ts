import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// *** Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { LayoutsModule } from './layouts/layouts.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DummyContentComponent } from './pages/dummy-content/dummy-content.component';
import { PseudoTextComponent } from './components/pseudo-text/pseudo-text.component';
import { PseudoListCardComponent } from './components/pseudo-list-card/pseudo-list-card.component';
import { PseudoAvatarComponent } from './components/pseudo-avatar/pseudo-avatar.component';
import { PseudoHorizontalCardComponent } from './components/pseudo-horizontal-card/pseudo-horizontal-card.component';
import { PseudoCardMod2Component } from './components/pseudo-card-mod2/pseudo-card-mod2.component';
import { PseudoCategoryComponent } from './components/pseudo-category/pseudo-category.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DummyContentComponent,
    PseudoTextComponent,
    PseudoListCardComponent,
    PseudoAvatarComponent,
    PseudoHorizontalCardComponent,
    PseudoCardMod2Component,
    PseudoCategoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    AppRoutingModule,
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
