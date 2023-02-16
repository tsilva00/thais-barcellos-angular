import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isBottom: boolean = true;

  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;

  
  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click',(e:Event)=>{
      /**
       * Only run when toggleButton is not clicked
       * If we don't check this, all clicks (even on the toggle button) gets into this
       * section which in the result we might never see the menu open!
       * And the menu itself is checked here, and it's where we check just outside of
       * the menu and button the condition abbove must close the menu
       */
     if(e.target !== this.toggleButton.nativeElement && e.target!==this.menu.nativeElement){
         this.isMenuOpen=false;
     }
 });
  }

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.isBottom = false;
    } else if (window.scrollY) {
      this.isBottom = false;
    } else  {
      this.isBottom = true;
    }
  }

  open = true;
  isMenuOpen = false;
    
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        this.open = !this.open;
      }
  
}
