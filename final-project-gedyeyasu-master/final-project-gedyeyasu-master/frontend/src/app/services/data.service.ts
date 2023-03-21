import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import IOrder from '../models/IOrder';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  createOrder(order: any) {
    console.log(order)
    return this.http.post(`${this.url}/api/orders`, order).pipe(
      tap(response => console.log(response))
    )
  }

  getOrders() {
    return this.http.get(`${this.url}/api/orders`).pipe(
      tap(response => console.log(response))
    )
  }

  setOrderRating(orderId: String, data: { rating: Number, restaurants: any[] }) {
    return this.http.patch(`${this.url}/api/orders/${orderId}/rating`, data).pipe(
      tap(response => console.log(response))
    )
  }

  getCurrentUser() {
    return this.http.get(`${this.url}/api/users`).pipe(
      tap(response => console.log(response))
    )
  }

}
