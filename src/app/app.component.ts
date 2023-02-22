import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/" routerLinkActive="active">Home</a></li>
        <li><a routerLink="/about" routerLinkActive="active">About</a></li>
        <li><a routerLink="/users" routerLinkActive="active">Users</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet> // динамической часть. Контейнер для нашего контента.
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routing';
}

// 1. Декларативный подход.
// Прописываем логику работы на элементах(в HTML коде).
// 2. Императивный подход.
// Создаем функцию и выполняем в ней код.
