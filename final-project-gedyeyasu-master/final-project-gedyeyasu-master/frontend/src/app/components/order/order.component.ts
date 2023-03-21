import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import IOrder from 'src/app/models/IOrder';
import ICartItem from 'src/app/models/ICarItem';
import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ReceiptDialog } from 'src/app/dialog/receipt/receipt.component';
import { combineMenuItems, calculateTotalItems } from 'src/app/utils';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders: any = []

  combineMenuItems = combineMenuItems
  calculateTotalItems = calculateTotalItems

  constructor(private dataService: DataService,
      private cartService: CartService,
      private snack: MatSnackBar,
      private dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchOrders()
  }

  fetchOrders() {
    this.dataService.getOrders().subscribe(orders => {
      this.orders = orders
    })
  }

  reorder(order: IOrder) {
    const cartItems = order.items
    this.cartService.addMultipleToCart(cartItems)
    this.snack.open(
      'Your order is added to your cart again. Feel free to modify your cart and checkout',
      'Dismiss',
      { duration: 5000 }
    )
  }

  receipt(order: IOrder) {
    this.dialog.open(ReceiptDialog, { data: order })
  }

  rateOrder(order: IOrder, rating: Number) {
    const restaurants = new Set()
    order.items.forEach(item => restaurants.add(item.restaurantId))

    this.dataService.setOrderRating(order._id || '', { rating, restaurants: [...restaurants] }).subscribe({
      next: response => {
        this.ratingSuccess()
        this.fetchOrders()
      },
      error: err => this.ratingError()
    })
  }

  ratingSuccess() {
    this.snack.open('Order is rated successfully', 'Dismiss', {
      duration: 8000
    })
  }

  ratingError() {
    this.snack.open('Error while updating order rating', 'Dismiss', {
      duration: 8000
    })
  }
}
