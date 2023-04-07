import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataService/data.service';

@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.css']
})
export class FoodCategoryComponent implements OnInit {

  foodCategories: any;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getCategories().subscribe(data => {
      console.log(data);
      
      this.foodCategories = data;
    });
  }


}
