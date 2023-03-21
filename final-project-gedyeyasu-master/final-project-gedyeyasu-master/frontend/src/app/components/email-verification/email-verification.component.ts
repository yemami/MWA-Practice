import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {

  constructor(private router: Router,
      private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.emailVerified()) {
      this.router.navigate(['', 'dashboard'])
    }
  }

}
