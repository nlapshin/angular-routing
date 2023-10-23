import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IsAuthenticatedGuard } from '../../guards/auth-guard'

import { UsersMainComponent } from './pages/users.main.component';
import { UsersListComponent } from './pages/users.list.component';
import { UsersDetailComponent } from './pages/users.detail.component';

@NgModule({
  declarations: [
    UsersMainComponent,
    UsersListComponent,
    UsersDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: UsersListComponent },
      { path: 'detail/:id', component: UsersDetailComponent },
    ]),
  ],
  providers: [IsAuthenticatedGuard]
})
export class UsersModule { }
