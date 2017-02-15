"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by zongy on 12-02-2017.
 */
var core_1 = require('@angular/core');
var product_data_service_1 = require('../../shared/product-data.service');
var ProductListComponent = (function () {
    function ProductListComponent(productDataService) {
        this.productDataService = productDataService;
        this.btntext = "buy now";
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.products = this.productDataService.getProductData();
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'product-list',
            templateUrl: 'app/home/products/product-list.html'
        }), 
        __metadata('design:paramtypes', [product_data_service_1.ProductDataService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map