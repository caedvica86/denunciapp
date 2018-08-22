import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  arrItem : string[];
  constructor() { 
    this.arrItem=['inicio','acerca','ayuda','cliente']

  }

  ngOnInit() {
  }

}
