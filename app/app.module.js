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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var header_component_1 = require('./shared/site-header/header.component');
var footer_component_1 = require('./shared/site-footer/footer.component');
var home_component_1 = require('./home/home.component');
var carousel_component_1 = require('./home/carousel/carousel.component');
var categories_component_1 = require('./home/categories/categories.component');
var product_list_component_1 = require('./home/products/product-list.component');
var star_rating_component_1 = require("./shared/star-rating.component");
var product_detail_component_1 = require("./detail/product-detail.component");
var contact_component_1 = require("./contact/contact.component");
var product_data_service_1 = require("./shared/product-data.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'contact', component: contact_component_1.ContactComponent },
                    { path: 'product/:id', component: product_detail_component_1.ProductDetailComponent },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }
                ], {
                    useHash: true, preloadingStrategy: router_1.PreloadAllModules
                }),
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                home_component_1.HomeComponent,
                carousel_component_1.CarouselComponent,
                categories_component_1.CategoriesComponent,
                product_list_component_1.ProductListComponent,
                star_rating_component_1.StartRatingComponent,
                contact_component_1.ContactComponent,
                product_detail_component_1.ProductDetailComponent
            ],
            providers: [product_data_service_1.ProductDataService, router_1.ROUTER_PROVIDERS, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map