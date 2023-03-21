import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  signup(userData: any) {
    return this.http.post(`${this.url}/api/auth/signup`, userData).pipe(
      tap(userInfo => console.log(userInfo))
    )
  }

  login(userData: any) {
    return this.http.post(`${this.url}/api/auth/login`, userData).pipe(
      tap(userInfo => console.log(userInfo))
    )
  }

  logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('emailVerified')
    localStorage.removeItem('firstName')
    localStorage.removeItem('lastName')
  }

  verifyEmail(verifyToken: string) {
    return this.http.post(`${this.url}/api/auth/verify-email/${verifyToken}`, {}).pipe(
      tap(userInfo => console.log(userInfo))
    )
  }

  forgotPassword(userData: any) {
    return this.http.post(`${this.url}/api/auth/forgot-password`, userData).pipe(
      tap(userInfo => console.log(userInfo))
    )
  }

  resetPassword(verifyToken: string, userData: any) {
    return this.http.post(`${this.url}/api/auth/reset-password/${verifyToken}`, userData).pipe(
      tap(userInfo => console.log(userInfo))
    )
  }

  setUserInfo(userInfo: any) {
    console.log(userInfo)
    localStorage.setItem('userId', userInfo.user._id)
    localStorage.setItem('token', userInfo.token)
    localStorage.setItem('emailVerified', userInfo.emailVerified ? '1' : '0')
    localStorage.setItem('firstName', userInfo.user.firstName)
    localStorage.setItem('lastName', userInfo.user.lastName)
  }

  getFullName() {
    return (localStorage.getItem('firstName') || '') + ' ' + (localStorage.getItem('lastName') || '')
  }

  updateEmailVerified(status: boolean) {
    localStorage.setItem('emailVerified', status ? '1' : '0')
  }

  isLoggedIn() {
    return Boolean(localStorage.getItem('token'));
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  emailVerified() {
    return localStorage.getItem('emailVerified') === '1'
  }

}
