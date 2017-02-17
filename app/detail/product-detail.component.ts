/**
 * Created by zongy on 12-02-2017.
 */
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from '../home/products/product-list';
import { ProductDataService } from '../shared/product-data.service';

class Shoesize {
  size: string;
}

@Component ({
  templateUrl: './app/detail/product-detail.html'
})

export class ProductDetailComponent implements OnInit, AfterViewInit {
  productid: number;
  product: IProduct;
  model:Shoesize = new Shoesize();
  selectedSize:any = 0;
  sizes: Array<string>;
  sizetitle: string = "Sizes";

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productDataService: ProductDataService) {

  }

  ngOnInit() {
    this.productid = +this._route.snapshot.params['id'];
    this.product = this._productDataService.getProductDataById(this.productid);
    this.sizes = ["EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"];
  }

  ngAfterViewInit() {

  }
}
