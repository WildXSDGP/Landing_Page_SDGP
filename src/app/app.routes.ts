import { Routes } from '@angular/router';

import { TeamPage } from './team-page/team-page';
import { PageNotFound } from './page-not-found/page-not-found';
import { Landing } from './pages/landing/landing';
import { Features } from './features/features';

export const routes: Routes = [
    {path:'',component:Landing},
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
  { path: 'features', component: Features },
  { path: 'about-us', component: TeamPage},
  { path: '**', component: PageNotFound},
];
