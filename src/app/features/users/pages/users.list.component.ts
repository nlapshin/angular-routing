import { Component} from '@angular/core';

@Component({
    selector: 'users-list-app',
    template: `
      <ul>
        <li><a routerLink="/users/detail/1">User 1</a></li>
        <li><a routerLink="/users/detail/2">User 2</a></li>
      </ul>
    `
})
export class UsersListComponent { }
