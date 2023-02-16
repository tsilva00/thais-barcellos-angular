import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  loaded = false;
  constructor() { }

  ngOnInit(): void {
      setInterval(() => {
        this.loaded = true; 
        }, 1000);
  }

}
