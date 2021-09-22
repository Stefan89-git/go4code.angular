import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  private menuUrl = 'http://localhost:8080/api/menu/';

  constructor(private http : HttpClient) {
   }

   public getMenu() : Observable<Menu []>{
     return this.http.get<Menu []>(this.menuUrl);
   }

   public save(menu : Menu){
    return this.http.post<Menu>(this.menuUrl, menu);
   }

   public delete(id : number){
     return this.http.delete(this.menuUrl + id);
   }
}
