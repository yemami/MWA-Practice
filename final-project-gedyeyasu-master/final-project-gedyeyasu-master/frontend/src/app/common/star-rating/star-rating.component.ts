import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  template: `
    <ng-container *ngFor="let star of starsArray; let i = index">
      <i class="fa fa-star" [class.filled]="i < rating" (click)="updateRating(i + 1)"></i>
    </ng-container>
  `,
  styles: [`
    .fa-star {
      font-size: 16px;
      cursor: pointer;
      color: #ccc;
    }
    .filled {
      color: #ffc107;
    }
  `]
})
export class StarRatingComponent {
  @Input() rating!: number;
  @Input() maxRating: number = 5;
  @Input() viewOnly!: boolean;
  @Output() selectedStars: EventEmitter<Number> = new EventEmitter()

  starsArray!: any[];

  ngOnInit() {
    this.starsArray = Array(this.maxRating).fill(0).map((x, i) => i);
  }

  updateRating(rating: number) {
    if (this.viewOnly) return
    this.rating = rating;
    this.selectedStars.emit(this.rating)
  }
}
