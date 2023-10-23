import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { CommonPageResolver } from './resolvers/common-pages-resolver';

import { AppComponent } from './app.component';
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      // enableTracing: true, // Переменные окружения?
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    }),
  ],
  bootstrap: [AppComponent],
  providers: [CommonPageResolver]
})
export class AppModule { }

// Ситуация.
// 1. Пользователь подгрузил основную часть файлов.
// 2. Пошел на страницу которая грузится по lazy-loading
// И иметь lazy loading и иметь максимально быструю загрузку lazy страниц
// preloadingStrategy: PreloadAllModules
// 1. Подгружать основной часть файлов.
// 2. После того, как мы получим события загрузки страницы, мы фоном подгрузим все lazy load модули.
