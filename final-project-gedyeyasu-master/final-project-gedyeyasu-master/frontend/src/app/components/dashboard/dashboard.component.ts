import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  searchResults = undefined;

  categories: Array<{ name: string; icon: string }> = [
    { name: 'All', icon: 'store' },
    { name: 'Pizza', icon: 'local_pizza' },
    { name: 'Burger', icon: 'fastfood' },
    { name: 'Catering', icon: 'restaurant' },
  ];

  searchQuery = '';
  selectedCategory: any;
  restaurants!: Array<any>;
  restaurantsOriginal!: Array<any>;

  constructor(private restaurantService: RestaurantService,
      private authService: AuthService) {}

  @ViewChild('inputReference') myInputElement!: ElementRef<HTMLInputElement>;

  update(e: string) {
    console.log(e);
    this.searchQuery = e;
    this.restaurantService.findMenus(this.searchQuery).subscribe((data) => {
      this.searchResults = data as any;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.restaurantService.getAllResturants().subscribe((data) => {
      console.log(data);
      this.restaurants = data as any;
      this.restaurantsOriginal = data as any;
    });
  }

  viewMenus(restaurant_id: string): void {
    console.log(restaurant_id);
    // code to view details of the selected restaurant
  }

  selectCategory(category: { name: string; icon: string }) {
    this.selectedCategory = category;
    console.log(category);
    this.restaurants = this.restaurantsOriginal.filter((res) =>
      category.name === 'All' ? res : res.category.includes(category.name)
    );
    console.log(this.restaurants);
    // filter the array based on the selected category
  }

  get fullName() {
    return this.authService.getFullName()
  }
}
