import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import IOrder from 'src/app/models/IOrder';

@Component({
  selector: 'app-receipt',
  template: `

  <div class="container">
      <mat-card>
        <mat-card-content>
          <mat-card-title>Receipt</mat-card-title>
          <mat-card-title><h3 style="text-decoration: underline;">Order No: {{order._id}}</h3></mat-card-title>

          <table mat-table [dataSource]="order.items" class="mat-elevation-z0">

            <ng-container matColumnDef="title">
              <th mat-header-cell *matHeaderCellDef> Item </th>
              <td mat-cell *matCellDef="let element"> {{element.name}} </td>
            </ng-container>

            <ng-container matColumnDef="price">
              <th mat-header-cell *matHeaderCellDef> Price </th>
              <td mat-cell *matCellDef="let element"> {{element.price | currency}} </td>
            </ng-container>

            <ng-container matColumnDef="amount">
              <th mat-header-cell *matHeaderCellDef> Quantity </th>
              <td mat-cell *matCellDef="let element"> {{element.amount}} </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
            </table>

          <mat-card-footer>
            <h3 class="line">SubTotal: {{'$' + order.subTotal}}</h3>
            <h3 class="line">Total: {{'$' + order.total}}</h3>
            <button (click)="ok()" mat-stroked-button color="primary">
              Ok
            </button>
          </mat-card-footer>

        </mat-card-content>
      </mat-card>
    </div>

  `,
  styles: [`
      table {
        border-bottom: 1px solid lightgrey;
      }
      .line {
        text-align: right;
        margin-right: 40px;
        margin-top: 20px;
        text-decoration: underline;
      }

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
  `]
})
export class ReceiptDialog {

  displayedColumns: string[] = ['title', 'price', 'amount'];

  constructor(public matDialog: MatDialogRef<ReceiptDialog>,
    @Inject(MAT_DIALOG_DATA) public order: IOrder) {}

  ok() {
    this.matDialog.close()
  }

}
