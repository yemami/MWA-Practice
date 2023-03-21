import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { OrderComponent } from './components/order/order.component';
import { AccountComponent } from './components/account/account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptor } from './services/token.interceptor';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { CartComponent } from './components/cart/cart.component';
import { StoreComponent } from './components/store/store.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { AuthGuard } from './services/auth.guard';
import { CheckoutDialog } from './dialog/checkout/checkout.component';
import { ReceiptDialog } from './dialog/receipt/receipt.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StarRatingComponent } from './common/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    RestaurantComponent,
    OrderComponent,
    // AccountComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    VerifyEmailComponent,
    CartComponent,
    StoreComponent,
    EmailVerificationComponent,
    CheckoutDialog,
    ReceiptDialog,
    DashboardComponent,
    StarRatingComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        title: 'Welcome to your Dash',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Welcome to your account',
        canActivate: [AuthGuard],
      },
      { path: 'signup', component: SignupComponent, title: 'Create Account' },
      {
        path: 'login',
        component: LoginComponent,
        title: 'Login to your Account',
      },
      {
        path: 'email-verification',
        component: EmailVerificationComponent,
        title: 'Verify your email'
      },
      {
        path: 'verify-email/:verifyToken',
        component: VerifyEmailComponent,
        title: 'Verify Email'
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        title: 'Forgot Password',
      },
      {
        path: 'reset-password/:verifyToken',
        component: ResetPasswordComponent,
        title: 'Verify Email',
      },
      {
        path: 'restaurant/:zipCode',
        // lazy-load near by restaurants component
        // loadChildren: () =>
        //   import('./components/restaurant/restaurant.component').then(
        //     (m) => m.RestaurantComponent
        //   ),
        component: RestaurantComponent,
        title: 'Choose your order',
      },
      {
        path: 'restaurant/store/:resturant_id',
        component: StoreComponent,
        title: 'Choose your menu',
      },
      {
        path: 'cart',
        component: CartComponent,
        title: 'Cart',
        canActivate: [AuthGuard],
      },
      {
        path: 'orders',
        component: OrderComponent,
        title: 'Your orders',
        canActivate: [AuthGuard] },
      {
        path: 'account',
        // lazy-load account component
        loadChildren: () =>
          import('./modules/account/account.module').then(
            (m) => m.AccountModule
          ),
        // component: AccountComponent,
        title: 'Update your Profile',
        canActivate: [AuthGuard]
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      },
    ]),
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatChipsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
