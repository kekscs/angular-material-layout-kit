import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layouts
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { Layout101Component } from './layouts/layout101/layout101.component';
import { Layout202Component } from "./layouts/layout202/layout202.component";
import { Layout203Component } from './layouts/layout203/layout203.component';
import { Layout204Component } from './layouts/layout204/layout204.component';

// Pages
import { HomePage } from './pages/home/home.page';
import { Layout101Page } from './pages/layout101/layout101.page';
import { Layout202Page } from "./pages/layout202/layout202.page";
import { Layout203Page } from './pages/layout203/layout203.page';
import { Layout204Page } from './pages/layout204/layout204.page';


const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    pathMatch: 'full',
    children: [
      { path: '', component: HomePage }
    ]
  },
  {
    path: 'layout101',
    component: Layout101Component,
    children: [
      { path: '', component: Layout101Page }
    ]
  },
  {
    path: 'layout202',
    component: Layout202Component,
    children: [
      { path: '', component: Layout202Page }
    ]
  },
  {
    path: 'layout203',
    component: Layout203Component,
    children: [
      { path: '', component: Layout203Page }
    ]
  },
  {
    path: 'layout204',
    component: Layout204Component,
    children: [
      { path: '', component: Layout204Page }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
