import { Component} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';

type UserDetailMode = 'short' | 'full';

@Component({
    selector: 'users-detail-app',
    template: `
      Пользователь {{id}}. Режим: {{mode}}

      <button (click)="goHome()">На главную</button>
    `
})
export class UsersDetailComponent {
  id: number | undefined;
  mode: UserDetailMode | undefined;

  private paramsSubscription: Subscription;
  private querySubscription: Subscription;

  constructor(private activateRoute: ActivatedRoute, private router: Router){
    this.paramsSubscription = activateRoute.params.subscribe(params=> this.id = params['id']);

    this.querySubscription = activateRoute.queryParams.subscribe(
      (queryParam: { mode?: UserDetailMode }) => {
        this.mode = queryParam['mode'] || 'short';
      }
    );
  }

  goHome() {
    this.router.navigate(
      ['/home'],
      { state: { key: 'value' } }
    );
  }
}
