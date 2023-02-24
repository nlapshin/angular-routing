import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

async function getUser(): Promise<{ id: string, role: 'admin' | 'user' | 'anon' } | null> {
  return new Promise((res) => {
    setTimeout(() => {
      res({ id: 'user-id', role: 'admin' } )
    }, 500)
  })
}

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {
  constructor(private router: Router) {}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const user = await getUser();

    return user?.role === 'admin' || user?.role === 'user'
  }
}
