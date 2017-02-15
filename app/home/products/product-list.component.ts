/**
 * Created by zongy on 12-02-2017.
 */
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product-list';
import { ProductDataService } from '../../shared/product-data.service';

@Component ({
  selector: 'product-list',
  templateUrl: 'app/home/products/product-list.html'
})

export class ProductListComponent implements OnInit {
  products:IProduct[];
  btntext: string = "buy now";

  constructor(private productDataService: ProductDataService) {

  }

  ngOnInit() {
    this.products = this.productDataService.getProductData();
  }
}
