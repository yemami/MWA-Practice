import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { Iprofile } from './Iprofile';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  profileForm!: FormGroup;
  profile!: Iprofile;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snack: MatSnackBar,
  ) {
    // initialize the profile form group
    this.profileForm = this.formBuilder.group({
      name: '',
      dateOfBirth: '',
      gender: '',
      email: '',
      password: '',
      profile: this.formBuilder.group({
        profilePic: '',
        bio: '',
        location: '',
        interests: ''
      })
    });
    this.userService.getProfileDetails().subscribe((data) => {
      this.profile = data as Iprofile;
      console.log(this.profile);
      // this.profileForm = this.formBuilder.group(this.profile);
      let newDat = {
        ...{ state: '', city: '', street: '', zipCode: '' },
        ...this.profile?.address,
        ...this.profile,
      };
      console.log(newDat);
      this.profileForm = this.formBuilder.group(newDat);
    });
  }

  updateProfile() {
    // Implement the logic to update the user's profile information
    if (!this.profileForm.valid) return;
    let formData = this.profileForm.value;
    let data = {
      ...formData,
      address: {
        state: formData.state,
        city: formData.city,
        street: formData.street,
        zipCode: formData.zipCode,
      },
    };
    this.userService
      .updateProfileDetails(data)
      .subscribe({
        next: response => this.snack.open('User Account updated successfully.', 'Dismiss', { duration: 5000 }),
        error: err => this.snack.open('Error while updating account information.', 'Dismiss', { duration: 5000 }),
      });
  }
}
