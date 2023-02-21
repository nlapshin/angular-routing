import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component ';
import { NotFoundComponent } from './pages/notFound.component';

import { UsersMainComponent } from './pages/users/main.component';
import { UsersListComponent } from './pages/users/list.component';
import { UsersDetailComponent } from './pages/users/detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersMainComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: UsersListComponent },
      { path: 'detail/:id', component: UsersDetailComponent },
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, pathMatch:'full' },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];
