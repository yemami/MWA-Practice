import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import ICartItem from 'src/app/models/ICarItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  cart: ICartItem[] = []
  totalCartItems: number = 0
  sub$!: Subscription

  constructor(private authService: AuthService,
      private cartService: CartService,
      private router: Router){}

  ngOnInit() {
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart
    })
    this.cartService.getTotalCartItems().subscribe(totalItems => {
      this.totalCartItems = totalItems
    })
  }

  ngOnDestroy() {
    this.sub$.unsubscribe()
  }

  get userLoggedIn() {
    return this.authService.isLoggedIn()
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['', 'login'])
  }

  get onHomePage() {
    return this.router.isActive('', true)
  }
}
