import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  loading = true;

  constructor(private authService: AuthService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    const verifyToken = this.route.snapshot.paramMap.get('verifyToken')
    this.authService.verifyEmail(verifyToken as string).subscribe(_ => {
      this.authService.updateEmailVerified(true)
      this.loading = false;
    })
  }

}
