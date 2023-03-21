import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import ICartItem from '../models/ICarItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart!: ICartItem[]
  private cart$!: BehaviorSubject<ICartItem[]>

  constructor() {
    const storedCart = localStorage.getItem('cart')
    this.cart = storedCart ? JSON.parse(storedCart) : []
    this.cart$ = new BehaviorSubject(this.cart)
  }

  getCart() {
    return this.cart$.asObservable()
  }

  getTotalCartItems() {
    return this.cart$.asObservable().pipe(
       map(cart => cart.reduce((acc, cartItem) => acc + (cartItem?.amount || 0), 0))
    )
  }

  addToCart(cartItem: ICartItem, newCartItemAmount = 1) {
    console.log(cartItem)
    const existingCartItem = this.cart.find(c => cartItem._id === c._id)

    if (existingCartItem) {
      existingCartItem.amount = (existingCartItem.amount || 0) + newCartItemAmount;
    } else {
      cartItem.amount = newCartItemAmount
      this.cart.push(cartItem)
    }

    localStorage.setItem('cart', JSON.stringify(this.cart)) // store updated cart
    this.cart$.next(this.cart)
  }

  addMultipleToCart(cartItems: ICartItem[]) {
    cartItems.forEach(cartItem => {
      this.addToCart(cartItem, cartItem.amount)
    })
  }

  removeFromCart(cartItem: ICartItem) {
    const existingCartItem = this.cart.find(c => cartItem._id === c._id)
    if (!existingCartItem) return

    if (existingCartItem.amount == 1) {
      this.cart = this.cart.filter(c => cartItem._id !== c._id)
    } else {
      existingCartItem.amount = (existingCartItem.amount || 0) - 1;
    }

    localStorage.setItem('cart', JSON.stringify(this.cart)) // store update cart
    this.cart$.next(this.cart)
  }

  emptyCart() {
    this.cart = []
    localStorage.setItem('cart', JSON.stringify(this.cart)) // store updated cart
    this.cart$.next(this.cart)
  }

}
