import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import{ Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl=  'https://www.themealdb.com/api/json/v1/1'

  constructor(private http: HttpClient) {}
    getCategories() {
      return this.http.get(`${this.apiUrl}/categories.php`);
    }
  
  getCategory(categoryName:any){

    return this.http.get(`${this.apiUrl}/filter.php?c=${categoryName}`)
  }


}


