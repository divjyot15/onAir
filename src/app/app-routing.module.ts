import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routes } from './shared/routes';
@NgModule({
  
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
