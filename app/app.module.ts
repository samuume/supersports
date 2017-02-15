import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules, ROUTER_PROVIDERS } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './shared/site-header/header.component';
import { FooterComponent } from './shared/site-footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { ProductListComponent } from './home/products/product-list.component';
import { StartRatingComponent } from "./shared/star-rating.component";
import { ProductDetailComponent } from "./detail/product-detail.component";
import { ContactComponent } from "./contact/contact.component";

import {ProductDataService} from "./shared/product-data.service";

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      { path:'home', component:HomeComponent },
      { path:'contact', component:ContactComponent },
      { path:'product/:id', component:ProductDetailComponent },
      { path:'', redirectTo:'home', pathMatch:'full'},
      { path:'**', redirectTo:'home', pathMatch:'full'}
    ], {
      useHash: true, preloadingStrategy: PreloadAllModules
    }),
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    CategoriesComponent,
    ProductListComponent,
    StartRatingComponent,
    ContactComponent,
    ProductDetailComponent
  ],
  providers: [ ProductDataService, ROUTER_PROVIDERS, {provide: LocationStrategy, useClass: HashLocationStrategy } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
