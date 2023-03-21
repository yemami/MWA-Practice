import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ICartItem from 'src/app/models/ICarItem';
import { CartService } from 'src/app/services/cart.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent {

  selectedRestaurant!: any;

  constructor(
    private route: ActivatedRoute,
    private resturantService: RestaurantService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    let { resturant_id } = this.route.snapshot.params;
    this.resturantService.getResturant(resturant_id).subscribe((data) => {
      console.log(data);
      this.selectedRestaurant = data;
    });
  }

  addToCart(cartItem: ICartItem) {
    let { resturant_id } = this.route.snapshot.params;

    // attach restaurant id to cartItem for rating functionality
    cartItem.restaurantId = resturant_id

    this.cartService.addToCart(cartItem)
  }
}
