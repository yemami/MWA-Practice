import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
      private snack: MatSnackBar,
      private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const isLoggedIn = this.authService.isLoggedIn()

      // if (isLoggedIn) {
      //   this.router.navigate(['', 'email-verification'])
      //   return false
      // }

      if (!isLoggedIn) {
        this.router.navigate(['', 'login'])
        this.snack.open('Please Login First', 'Dismiss', { duration: 4000 })
      }

      return isLoggedIn
  }

}
