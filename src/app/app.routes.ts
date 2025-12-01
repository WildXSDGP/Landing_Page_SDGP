import { Routes } from '@angular/router';
import { App } from './app';
import { TeamPage } from './team-page/team-page';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {path:'',component:App},
    {path:'home',redirectTo:'',pathMatch:'full'},

    {
    path: 'about',
    children: [
      { path: '', redirectTo: 'team', pathMatch: 'full' }, // default
      { path: 'team', component: TeamPage },
      { path: 'wildx', component: PageNotFound },
    ]
  },
  { path: 'parks', component: PageNotFound },
  { path: 'map', component: PageNotFound },
  { path: 'features', component: PageNotFound },
  { path: 'about-us', component: TeamPage},
  { path: '**', component: PageNotFound},
];
