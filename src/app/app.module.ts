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
