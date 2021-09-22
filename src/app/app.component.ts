import { Component } from '@angular/core';
import { Category } from './category';
import { CategoryServiceService } from './category-service.service';
import { Menu } from './menu';
import { MenuServiceService } from './menu-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public menu: Menu[];
  public categories: Category[];
  public newMenu: Menu;
  title: any;

  constructor(
    private menuService: MenuServiceService,
    private catService: CategoryServiceService
     ){
       this.menu= [],
       this.resetNewMenu();
     }

     ngOnInit(){
       this.getMenu();
       this.getCategories()
     }

     getMenu(){
       this.menuService.getMenu()
       .subscribe((response : Menu[])  => this.menu = response);
     }

     getCategories(){
       this.catService.getCategories()
       .subscribe((response : Category[]) => this.categories = response);
     }

     resetNewMenu(){
    
     }

     
}
