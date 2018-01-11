import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PreloadingService} from "./shared/services/pre-loading.service";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'login', loadChildren: './login/login.module#LoginModule', data: {preload: true} }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadingService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
