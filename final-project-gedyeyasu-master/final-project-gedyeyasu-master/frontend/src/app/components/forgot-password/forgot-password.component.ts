import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  constructor(private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private snack: MatSnackBar) {}

    forgotPasswordForm = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
    })

    get email() {
      return this.forgotPasswordForm.get('email')
    }

    forgotPassword() {
      if (!this.forgotPasswordForm.valid) return

      const userData = this.forgotPasswordForm.value

      this.authService.forgotPassword(userData).subscribe(userInfo => {
        // this.router.navigate(['restaurant'])
        this.snack.open('Please check your email for a password reset link', 'Dismiss', {
          duration: 2000
        })
      })
    }

}
