import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

// *** Layouts ***
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { Layout101Component } from './layout101/layout101.component';



@NgModule({
  declarations: [
    AppLayoutComponent,
    Layout101Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class LayoutsModule { }
