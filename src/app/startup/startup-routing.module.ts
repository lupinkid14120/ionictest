import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartupPage } from './startup.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: StartupPage,
    children:[
      {
        path: 'start',
        loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
      },
      {
        path: 'setup',
        loadChildren: () => import('./setup/setup.module').then( m => m.SetupPageModule)
      },
      {
        path: '',
        redirectTo: '/startup/tabs/start',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '',
    redirectTo: '/startup/tabs/start',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartupPageRoutingModule {}
