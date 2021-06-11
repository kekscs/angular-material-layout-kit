import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';

// *** Layouts ***
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { Layout101Component } from './layout101/layout101.component';
import { Layout203Component } from './layout203/layout203.component';
import { Layout202Component } from './layout202/layout202.component';



@NgModule({
  declarations: [
    AppLayoutComponent,
    Layout101Component,
    Layout203Component,
    Layout202Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule
  ]
})
export class LayoutsModule { }
