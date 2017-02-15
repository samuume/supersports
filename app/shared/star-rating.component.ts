/**
 * Created by zongy on 12-02-2017.
 */
import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'star-rating',
  templateUrl: './app/shared/star-rating.html',
})

export class StartRatingComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;

  @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 31.5;
  }

  onClick(): void {

  }
}
