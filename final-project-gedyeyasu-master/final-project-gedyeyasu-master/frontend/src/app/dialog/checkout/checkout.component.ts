import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import ICartItem from 'src/app/models/ICarItem';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  template: `

    <div class="container">
      <mat-card>
        <mat-card-content>
          <mat-card-title>Checkout</mat-card-title>
          <mat-card-title><h3>Please tell us your delivery address</h3></mat-card-title>
          <form [formGroup]="checkoutForm">
              <mat-form-field>
                <input
                  matInput placeholder="State" formControlName="state"
                />
                <mat-error *ngIf="state?.errors">State is required</mat-error>
              </mat-form-field>

              <mat-form-field>
                <input matInput placeholder="City" formControlName="city" />
                <mat-error *ngIf="city?.errors">City is required</mat-error>
              </mat-form-field>


              <mat-form-field>
                <input matInput placeholder="Street" formControlName="street" />
                <mat-error *ngIf="street?.errors">Street is required</mat-error>
              </mat-form-field>


              <mat-form-field>
                <input type="number" matInput placeholder="Zip Code"
                  formControlName="zipCode"
                />
                <mat-error *ngIf="zipCode?.errors">Zip Code is required</mat-error>
              </mat-form-field>


              <button [disabled]="loading" mat-stroked-button color="primary" (click)="createOrder()">
                <mat-spinner [diameter]="25" *ngIf="loading"></mat-spinner>
                <span *ngIf="!loading">Order</span>
              </button>
          </form>
        </mat-card-content>
      </mat-card>
    </div>

  `,
  styles: [
    `
    mat-card {
      width: 400px;
    }
    .container {
      display: flex;
      justify-content: center;
      padding: 16px;
    }
    button, mat-form-field {
      width: 100%;
      margin-top: 16px;
    }
  `
  ]
})
export class CheckoutDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CheckoutDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ICartItem[],
    private fb: FormBuilder,
    private dataService: DataService,
    private authService: AuthService,
    private cartService: CartService,
    private snack: MatSnackBar,
    private router: Router,
  ) {}

  cart!: ICartItem[]
  loading = false
  currentUser: any

  checkoutForm = this.fb.nonNullable.group({
    state: ['', Validators.required],
    city: ['', Validators.required],
    street: ['', Validators.required],
    zipCode: ['', Validators.required]
  })

  ngOnInit(): void {
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart
      console.log(this.cart)
    })
    this.dataService.getCurrentUser().subscribe(user => {
      this.currentUser = user
      this.updateForm()
      console.log(this.currentUser)
    })
  }

  updateForm() {
    this.checkoutForm.get('state')?.setValue(this.currentUser.address.state)
    this.checkoutForm.get('city')?.setValue(this.currentUser.address.city)
    this.checkoutForm.get('street')?.setValue(this.currentUser.address.street)
    this.checkoutForm.get('zipCode')?.setValue(this.currentUser.address.zipCode)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createOrder() {
    if (!this.checkoutForm.valid) return

    const order = {
      items: this.cart,
      deliveryAddress: this.checkoutForm.value
    }

    this.loading = true
    this.dataService.createOrder(order).subscribe({
      next: response => {
        console.log(response)
        this.loading = false
        this.orderSuccess()
        this.dialogRef.close()
        this.cartService.emptyCart()
        this.router.navigate(['', 'orders'])
      },
      error: error => {
        console.log(error)
        this.orderError()
        this.loading = false
      }
    })
  }

  orderSuccess() {
    this.snack.open(
      'Your order is complete and your food will be delivered soon. Please check your email for a receipt.',
      'Dismiss',
      { duration: 8000 }
    )
  }

  orderError() {
    this.snack.open(
      'Sorry. We are having trouble creating your order. Please try again.',
      'Dismiss',
      { duration: 8000 }
    )
  }

  get state() {
    return this.checkoutForm.get('state')
  }

  get city() {
    return this.checkoutForm.get('city')
  }

  get street() {
    return this.checkoutForm.get('street')
  }

  get zipCode() {
    return this.checkoutForm.get('zipCode')
  }
}
