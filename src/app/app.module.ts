import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';


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
  bootstrap: [AppComponent]
})
export class AppModule { }
