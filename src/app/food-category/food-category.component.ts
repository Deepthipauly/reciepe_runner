import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataService/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.css']
})
export class FoodCategoryComponent implements OnInit {

  foodCategories: any;
  meals:any;

  constructor(private dataService: DataService,private router: Router) {

  }

  ngOnInit() {
    this.dataService.getCategories().subscribe(data => {
      this.foodCategories = data;
    });
  }

  getitems(categoryName:any){
    this.router.navigate([categoryName])
  }
}
