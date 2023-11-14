import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/* The AuthService class manages the login and logout functionality and keeps track of the user's login
status. */
export class AuthService {
  private isLogged = false;
  private userRole: 'admin' | null = null;

  login(userRole: 'admin') {
    this.isLogged = true;
    this.userRole = userRole;
  }

  logout() {
    this.isLogged = false;
    this.userRole = null;
  }

  isLoggedIn() {
    return this.isLogged;
  }

  getUserRole() {
    return this.userRole;
  }
}

