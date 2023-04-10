import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  @Input() idMeal : string| undefined
  @Input() strMealThumb : string| undefined
  @Input () strMeal:string|undefined
}
