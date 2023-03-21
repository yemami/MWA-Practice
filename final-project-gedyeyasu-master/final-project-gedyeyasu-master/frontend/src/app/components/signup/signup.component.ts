import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private snack: MatSnackBar,
    private router: Router
  ) {}

  signupForm = this.fb.nonNullable.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
    },
    {
      validators: this.passwordMatch,
    }
  );

  passwordMatch(c: AbstractControl): ValidationErrors | null {
    if (c.get('password')?.value !== c.get('confirmPassword')?.value) {
      return { mismatch: true };
    }
    return null;
  }

  get firstName() {
    return this.signupForm.get('firstName');
  }

  get lastName() {
    return this.signupForm.get('lastName');
  }

  get phone() {
    return this.signupForm.get('phone');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  signup() {
    if (this.signupForm?.errors?.['mismatch']) {
      this.snack.open("Password doesn't match", 'Dismiss', { duration: 2000 });
      return;
    }

    if (!this.signupForm.valid) return;

    const userData: any = this.signupForm.value;
    this.authService.signup(userData).subscribe({
      next: (userInfo) => {
        this.authService.setUserInfo(userInfo);
        this.router.navigate(['cart']);
      },
      error: (err) => {
        this.snack.open('Signup failed', 'Dismiss', { duration: 6000 });
      },
    });
  }
}
