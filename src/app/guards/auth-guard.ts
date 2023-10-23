import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

export interface IUser {
  id: string,
  role: 'admin' | 'user' | 'anon'
}

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {
  constructor(private router: Router) {}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    // 1. Есть user или нет.
    const user = await getUser();

    console.log('next', next);
    console.log('state', state);

    // 2. Есть ли доступ или нет.
    // true или false
    // 
    return user?.role === 'admin' || user?.role === 'user'
  }
}

// auth.service.ts -> getUser -> async request
async function getUser(): Promise<IUser | null> {
  return new Promise((res) => {
    setTimeout(() => {
      res(null);
      // res({ id: 'user-id', role: 'admin' })
    }, 500)
  })
}
