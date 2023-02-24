import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

async function getData(): Promise<{ key: string } | null> {
  return new Promise((res) => {
    setTimeout(() => {
      res({ key: 'value' } )
    }, 500)
  })
}


@Injectable()
export class CommonPageResolver {
  constructor(private router: Router) {}

  async resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    try {
      const data = await getData();

      console.log(data);

      return data;
    } catch (err) {
      this.router.navigateByUrl('error');
      return;
    }
  }
}
