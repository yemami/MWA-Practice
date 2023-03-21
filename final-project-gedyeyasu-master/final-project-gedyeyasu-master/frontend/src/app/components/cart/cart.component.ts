import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CheckoutDialog } from 'src/app/dialog/checkout/checkout.component';
import { CartService } from 'src/app/services/cart.service';
import ICartItem from 'src/app/models/ICarItem';
import { calculateTotalPrice, calculateSubTotalPrice, calculateSingleItemPrice, calculateTax } from 'src/app/utils';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  cart: ICartItem[] = []
  sub$!: Subscription

  calculateTotalPrice = calculateTotalPrice
  calculateSubTotalPrice = calculateSubTotalPrice
  calculateSingleItemPrice = calculateSingleItemPrice
  calculateTax = calculateTax

  constructor(private cartService: CartService,
      private dialog: MatDialog) {}

  ngOnInit(): void {
    this.sub$ = this.cartService.getCart().subscribe(cart => {
      this.cart = cart
    })
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe()
  }

  increment(cartItem: ICartItem) {
    this.cartService.addToCart(cartItem)
  }

  decrement(cartItem: ICartItem) {
    this.cartService.removeFromCart(cartItem)
  }

  checkout() {
    if (this.cart.length === 0) return
    const dialogRef = this.dialog.open(CheckoutDialog)
  }

}
