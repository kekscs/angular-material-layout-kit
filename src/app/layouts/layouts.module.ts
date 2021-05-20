import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

// *** Layouts ***
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { Layout101Component } from './layout101/layout101.component';
import { Layout203Component } from './layout203/layout203.component';



@NgModule({
  declarations: [
    AppLayoutComponent,
    Layout101Component,
    Layout203Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule
  ]
})
export class LayoutsModule { }
