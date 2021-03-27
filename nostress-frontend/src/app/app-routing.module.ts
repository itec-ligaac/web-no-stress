import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './components/pages/landing-page/landing-page.component';
import {DestinationsPageComponent} from './components/pages/destinations-page/destinations-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: 'destinations',
    component: DestinationsPageComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
