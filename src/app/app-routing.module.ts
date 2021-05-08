import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layouts
import { AppLayoutComponent } from "./layouts/app-layout/app-layout.component";
import { Layout101Component } from "./layouts/layout101/layout101.component";


// Pages
import { HomeComponent } from './pages/home/home.component';
import { DummyContentComponent } from "./pages/dummy-content/dummy-content.component";

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    pathMatch: 'full',
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  {
    path: 'layout101',
    component: Layout101Component,
    children: [
      { path: '', component: DummyContentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
