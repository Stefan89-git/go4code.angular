import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  private catUrl : string;

  constructor(private http : HttpClient) { 
    this.catUrl = 'http://localhost:8080/api/menu/categories';
  }

  public getCategories() : Observable<Category[]>{
    return this.http.get<Category []>(this.catUrl);
  }
}
