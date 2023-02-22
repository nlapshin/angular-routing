import { Component} from '@angular/core';

// /users ->
//   /users -> UserList
//   /users/detail/1
//   /users/detail/2

// /users/list -> /users/detail/1 - абсолютный путь.
// /users/list -> ../detail/1 - относительный путь.

@Component({
    selector: 'users-list-app',
    template: `
      <ul>
        <li><a routerLink="/users/detail/1">User 1</a></li>
        <li><a routerLink="../detail/2">User 2</a></li>
      </ul>
    `
})
export class UsersListComponent { }
