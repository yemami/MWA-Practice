import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      zipCode: ['', Validators.required],
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
