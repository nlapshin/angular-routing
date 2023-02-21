import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersMainComponent } from './pages/users/main.component';
import { UsersListComponent } from './pages/users/list.component';
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    UsersMainComponent,
    UsersListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
