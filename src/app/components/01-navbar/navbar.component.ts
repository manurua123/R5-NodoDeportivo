import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    
  }
  scrollToSection(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
  }
}
