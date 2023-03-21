import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iprofile } from '../components/account/Iprofile';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:3000';

  getProfileDetails() {
    return this.http.get(this.url + `/api/users/`);
  }
  updateProfileDetails(data: Iprofile) {
    return this.http.patch(this.url + `/api/users/`, data);
  }

  constructor(private http: HttpClient) {}
}
