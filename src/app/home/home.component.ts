import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loaded = false;
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.loaded = true; 
      }, 1000);
  }
}
