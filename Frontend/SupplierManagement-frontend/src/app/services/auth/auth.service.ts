import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/* The AuthService class manages the login and logout functionality and keeps track of the user's login
status. */
export class AuthService {
  private isLogged = false;
  private userRole: 'admin' | null = null;

/**
 * The login function sets the isLogged property to true and assigns the userRole property to the value
 * of the userRole parameter.
 * @param userRole - The userRole parameter is a string that represents the role of the user logging
 * in. In this case, it is set to 'admin', indicating that the user logging in has administrative
 * privileges.
 */
  login(userRole: 'admin') {
    this.isLogged = true;
    this.userRole = userRole;
  }

/**
 * The "logout" function sets the "isLogged" property to false and the "userRole" property to null.
 */
  logout() {
    this.isLogged = false;
    this.userRole = null;
  }

/**
 * The isLoggedIn function returns the value of the isLogged property.
 * @returns The value of the variable `isLogged`.
 */
  isLoggedIn() {
    return this.isLogged;
  }

/**
 * The function returns the user's role.
 * @returns The user role is being returned.
 */
  getUserRole() {
    return this.userRole;
  }
}

