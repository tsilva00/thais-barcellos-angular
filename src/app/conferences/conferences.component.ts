import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.css']
})
export class ConferencesComponent implements OnInit {
  loaded = false;
  
  constructor() { }
  
  ngOnInit(): void {
    setInterval(() => {
      this.loaded = true; 
      }, 1000); 
  }

}
