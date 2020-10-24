import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/pages/home/home.module')
        .then(m => m.HomeModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('src/app/pages/settings/settings.module')
        .then(m => m.SettingsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
