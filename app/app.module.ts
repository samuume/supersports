import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

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
    ]),
    FormsModule,
    Ng2Bs3ModalModule
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
  providers: [ ProductDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
