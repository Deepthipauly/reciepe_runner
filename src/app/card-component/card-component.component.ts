import { Component, Input } from '@angular/core';
import { DataService } from '../dataService/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent {

  meals:any;
  constructor(private dataService: DataService,private router: Router) {

  }

  @Input() Image: string | undefined
  @Input() categoryName: string | undefined
  @Input() description: string | undefined
  


  


}
