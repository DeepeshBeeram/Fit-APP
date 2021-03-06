import { Subject } from 'rxjs/Subject';

import { User } from './user.model';
import { AuthData } from './auth.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()

export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router){
    
  }

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true);
    this.router.navigate(['login']);
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true);
    this.isAuthSuccessful();
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  private isAuthSuccessful () {

    this.router.navigate(['/training']);

  }
}
