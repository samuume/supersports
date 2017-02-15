/**
 * Created by zongy on 12-02-2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <!-- Carousel component -->
    <carousel></carousel>
    <main class="container">
      <section class="frontpage-content">
      <!-- Category component -->
        <categories></categories>
      <div class="divide-text">
        <hr><h2>{{dividetext}}yo</h2><hr>
      </div>
      <!-- Product component -->
      <product-list></product-list>
      </section>
    </main>
`
})
export class HomeComponent  {
  dividetext: string = "popular products";
}
