import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { FoodCategoryComponent } from './food-category/food-category.component';
import { CardComponentComponent } from './card-component/card-component.component';
import {HttpClientModule}  from  '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { CategoryCardComponent } from './category-card/category-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    FoodCategoryComponent,
    CardComponentComponent,
    CategoryComponent,
    HomeComponent,
    CategoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
