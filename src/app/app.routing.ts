import { Routes } from '@angular/router';

import { CommonPageResolver } from './resolvers/common-pages-resolver';

import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component ';
import { NotFoundComponent } from './pages/notFound.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { common: CommonPageResolver } },
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)
  },
  { path: 'home', component: HomeComponent, resolve: { common: CommonPageResolver } },
  { path: 'about', component: AboutComponent, pathMatch:'full' },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];
