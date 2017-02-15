/**
 * Created by zongy on 12-02-2017.
 */
import { Injectable } from '@angular/core';
import { PRODUCTDATA } from './product-data';
import { IProduct } from '../home/products/product-list';

@Injectable()

export class ProductDataService {
  getProductData() : IProduct[] {
    return PRODUCTDATA;
  }

  getProductDataById(productid: number) {
    return PRODUCTDATA.find(r => r.id == productid)
  }
}
