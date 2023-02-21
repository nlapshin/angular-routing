import { Component} from '@angular/core';

@Component({
    selector: 'users-main-app',
    template: `
      <h1>Users page</h1>
      <router-outlet></router-outlet>
    `
})
export class UsersMainComponent { }
