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
var router_1 = require('@angular/router');
var product_data_service_1 = require('../shared/product-data.service');
var Shoesize = (function () {
    function Shoesize() {
    }
    return Shoesize;
}());
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_route, _router, _productDataService) {
        this._route = _route;
        this._router = _router;
        this._productDataService = _productDataService;
        this.model = new Shoesize();
        this.selectedSize = 0;
        this.sizetitle = "Sizes";
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.productid = +this._route.snapshot.params['id'];
        this.product = this._productDataService.getProductDataById(this.productid);
        this.sizes = ["EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"];
    };
    ProductDetailComponent.prototype.ngAfterViewInit = function () {
        // Product image swap
        $('.image-toggler').click(function () {
            $('.image-toggle').hide();
            $($(this).attr('data-image-id')).show();
        });
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            templateUrl: './app/detail/product-detail.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, product_data_service_1.ProductDataService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map