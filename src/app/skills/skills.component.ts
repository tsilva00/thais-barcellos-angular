import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  loaded = false;
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.loaded = true; 
      }, 1000); 
  }

}
