import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainappPage } from './mainapp.page';

const routes: Routes = [
  {
    path: '',
    component: MainappPage
  },  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainappPageRoutingModule {}
