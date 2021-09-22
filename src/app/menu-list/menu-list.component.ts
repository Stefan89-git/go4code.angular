import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuServiceService } from '../menu-service.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  @Input()
  menuu : Menu;

  constructor() { }

  ngOnInit(): void {
    
  }

}
