import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  constructor(private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private snack: MatSnackBar) {}

  resetPasswordForm = this.fb.nonNullable.group({
    password: ['', Validators.required],
    confirmPassword: ['', [Validators.required]]
  }, {
    validators: this.passwordMatch
  })

  get password() {
    return this.resetPasswordForm.get('password')
  }

  get confirmPassword() {
    return this.resetPasswordForm.get('confirmPassword')
  }

  passwordMatch(c: AbstractControl): ValidationErrors | null {
    if (c.get('password')?.value !== c.get('confirmPassword')?.value) {
        return { mismatch: true };
    }
    return null
  }

  resetPassword() {
    if(this.resetPasswordForm.errors?.['mismatch']) {
      this.snack.open("Password doesn't match", "Dismiss", { duration :2000 })
      return
    }

    if (!this.resetPasswordForm.valid) return

    const userData = this.resetPasswordForm.value
    const verifyToken = this.route.snapshot.paramMap.get('verifyToken')

    this.authService.resetPassword(verifyToken as string, userData).subscribe(userInfo => {
      this.snack.open('Reset password is successful', 'Dismiss', { duration: 2000 })
    })
  }

}
