/**
 * Created by zongy on 12-02-2017.
 */
import { Component } from '@angular/core';
import { ICategory } from './categories';

@Component ({
  selector: 'categories',
  templateUrl: './app/home/categories/categories.html'
})
export class CategoriesComponent {
  categories: ICategory[] = [{
    id: 1,
    image: "app/assets/images/topsales/shoes.jpg",
    title: "basketball shoes",
    content: "Loerm ipsum dolor sit amet, consectetur adipiscing, vivamus congue nulla leo, quis imperdiet magna."
    },
    {
    id: 2,
    image: "app/assets/images/topsales/modern-clothes.jpg",
    title: "modern clothes",
    content: "Loerm ipsum dolor sit amet, consectetur adipiscing, vivamus congue nulla leo, quis imperdiet magna."
  },
  {
    id: 3,
    image: "app/assets/images/topsales/accessories.jpg",
    title: "accessories",
    content: "Loerm ipsum dolor sit amet, consectetur adipiscing, vivamus congue nulla leo, quis imperdiet magna."
  }
  ]
}
