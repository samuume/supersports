/**
 * Created by zongy on 12-02-2017.
 */
import { Component, AfterViewInit } from '@angular/core';

@Component ({
  selector: 'carousel',
  templateUrl: './app/home/carousel/carousel.html'
})
export class CarouselComponent implements AfterViewInit{
  ngAfterViewInit() {
    $('.carousel').carousel({
      interval: 5000,
      pause: "false"
    });
  }
}
