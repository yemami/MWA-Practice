import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { RestaurantInterface } from './IRestaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent {
  address!: string;
  restaurants!: Array<RestaurantInterface>;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    let { zipCode } = this.route.snapshot.params;
    this.address = zipCode;
    this.restaurantService.getNearByResturants(zipCode).subscribe((data) => {
      console.log(data);
      this.restaurants = data as Array<RestaurantInterface>;
    });
  }

  viewMenus(restaurant_id: string): void {
    console.log(restaurant_id);
    // code to view details of the selected restaurant
  }
}
