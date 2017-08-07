import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FooditemComponent } from './fooditem/fooditem.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {IngredientService} from "./ingredient.service";
import {HttpModule} from "@angular/http";
import { GeodataComponent } from './geodata/geodata.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantComponent,
    FooditemComponent,
    IngredientComponent,
    GeodataComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
