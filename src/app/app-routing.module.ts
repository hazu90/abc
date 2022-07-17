import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullPageLayoutComponent } from './layouts/full-page-layout/full-page-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
    ]
  },
  {
    path: '',
    component: FullPageLayoutComponent,
    children: [
      { path: 'login', loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
