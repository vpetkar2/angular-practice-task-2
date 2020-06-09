import { Injectable } from '@angular/core';
import { User } from './user';

export class AppUser {

  name: string;
  email: string;
  password: string;
  isLogin: boolean;

  constructor(obj ? : User) {
    this.name = obj && obj.name || '';
    this.email = obj && obj.email || '';
    this.password = obj && obj.password || '';
    this.isLogin = obj && obj.isLogin || false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  currentUser: AppUser;

  get(): User {
    return this.currentUser;
  }

  set(obj: User) {
    return this.currentUser = new AppUser(obj);
  }

  isLoggedIn(): boolean {
    return this.currentUser.isLogin;
  }
}
