import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

type UserDetailMode = 'short' | 'full'; // short type

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
    this.paramsSubscription = activateRoute.params.subscribe(params => {
      this.id = params['id']
    });

    this.querySubscription = activateRoute.queryParams.subscribe(
      (queryParam: { mode?: UserDetailMode }) => {
        this.mode = queryParam['mode'] || 'short';
      }
    );
  }

  goHome() {
    // Програмная навигация
    this.router.navigate(
      ['/home'],
      { queryParams: { key: 'value' }}
    );
  }
}

// Следующая лекция
// 1. Lazy loading.
// 2. Resolvers
// 3. Guards.
// 4. Разберем более глубокие примеры текущей лекции.
// 5. именнованный outlet можно немножко(разные пути)
// 6. Фрагменты
