import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  loaded = false;
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.loaded = true; 
      }, 1000);
  }

}
