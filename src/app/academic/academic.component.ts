import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {

  loaded = false;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.loaded = true; 
      }, 1000); 
  }

}
