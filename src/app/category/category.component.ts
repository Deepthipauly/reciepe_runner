import { Component } from '@angular/core';
import { DataService } from '../dataService/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  mealsDocument: any

  constructor(private dataService: DataService, private route: ActivatedRoute) {

  }
  async ngOnInit() {

    const categoryName = this.route.snapshot.paramMap.get("id");
    this.dataService.getCategory(categoryName).subscribe(data => {
      console.log("data in category",data);
      this.mealsDocument = data
    })
  }

}
