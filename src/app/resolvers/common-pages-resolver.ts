import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Resolve
} from '@angular/router';

@Injectable()
export class CommonPageResolver implements Resolve<{ key: string }> {
  constructor(private router: Router) {}

  async resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    try {
      const data = await getData();

      console.log('data', data);

      return data;
    } catch (err) {
      this.router.navigateByUrl('error');
      return;
    }
  }
}

async function getData(): Promise<{ key: string } | null> {
  return new Promise((res) => {
    setTimeout(() => {
      res({ key: 'value' } )
    }, 500)
  })
}
