import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersMainComponent } from './pages/users/main.component';
import { UsersListComponent } from './pages/users/list.component';
import { routes } from './app.routing';

// Инциализация роутинга
// 1. Подключаем модуль
// 2. Подключаем роуты
// 3.

@NgModule({
  declarations: [
    AppComponent,
    UsersMainComponent,
    UsersListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      // enableTracing: true, // Переменные окружения?
      scrollPositionRestoration: 'enabled'
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
