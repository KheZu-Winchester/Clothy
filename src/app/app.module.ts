import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';
import { TrendComponent } from './trend/trend.component';
import { DiscountComponent } from './discount/discount.component';
import { ProductsComponent } from './products/products.component';
import { ExpressComponent } from './express/express.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    TrendComponent,
    DiscountComponent,
    ProductsComponent,
    ExpressComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
