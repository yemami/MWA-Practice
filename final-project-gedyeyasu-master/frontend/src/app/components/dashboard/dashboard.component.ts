import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  users = [
    {
      _id: 1,
      name: 'John Doe',
      age: 27,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: 'New York, USA',
      picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      _id: 2,
      name: 'Jane Smith',
      age: 24,
      bio: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      location: 'London, UK',
      picture: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      _id: 3,
      name: 'Bob Johnson',
      age: 30,
      bio: 'Ut gravida augue eu ligula aliquam convallis.',
      location: 'Los Angeles, USA',
      picture: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  ];
  // interface User{name: string, age: number, bio:string, location:string, picture:string}
  onLike(user: any) {
    console.log('Liked!');
    this.users = this.users.filter((u) => u._id !== user._id);
  }

  onDislike(user: any) {
    console.log('Disliked!');
    this.users = this.users.filter((u) => u._id !== user._id);
  }
  constructor(private authService: AuthService) {}
  get fullName() {
    return this.authService.getName()
  }
}
