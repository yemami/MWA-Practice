import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private url = 'http://localhost:3000';
  coordinates!: { zip: string; latitude: string; longitude: string };

  constructor(private http: HttpClient) {}

  findMenus(searchQuery: string) {
    return this.http.get(this.url + '/api/restaurant/menus/search', {
      params: {
        searchQuery: searchQuery,
      },
    });
  }

  getAllResturantsCategory() {
    return this.http.get(this.url + `/api/restaurant/categories`);
  }
  getAllResturants() {
    return this.http.get(this.url + `/api/restaurant`);
  }
  getResturant(restaurant_id: string) {
    return this.http.get(this.url + `/api/restaurant/${restaurant_id}/menus`);
  }

  // getCoordinates(zipCode: string): Observable<any> {
  //   return this.http.get(
  //     `https://api.promaptools.com/service/us/zip-lat-lng/get/?zip=${zipCode}&key=17o8dysaCDrgvlc`
  //   );
  // }

  getNearByResturants(zipCode: string) {
    return this.http.get(this.url + `/api/restaurant/near-me`, {
      params: {
        zipCode: zipCode,
      },
    });
  }
}
