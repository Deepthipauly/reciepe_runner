import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent {
  
  @Input() Image:string|undefined
  @Input() categoryName: string|undefined
  @Input() description: string|undefined


}
