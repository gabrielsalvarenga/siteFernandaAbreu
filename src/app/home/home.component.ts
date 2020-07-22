import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Array<any> = [];

  constructor() {
    this.items = [
      { item: '../assets/img/banner.jpg' },
      { item: '../assets/img/bbberço.jpg' },
      { item: '../assets/img/bbsofa.jpg' },
      { item: '../assets/img/piscina.jpg' },
      { item: '../assets/img/projeto.jpg' },
      { item: '../assets/img/bbquarto.jpg' },
    ];
  }

  ngOnInit(): void {

  }

}
