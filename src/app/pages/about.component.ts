import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true, // Включаем режим standalone
  selector: 'about-app',
  imports: [CommonModule], // подключаем туда нужные модули
  template: `<h3>О проекте</h3>`
})
export class AboutComponent { }
