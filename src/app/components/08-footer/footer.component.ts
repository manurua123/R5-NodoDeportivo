import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  form = false;
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {}

  enviarForm() {
    this.form = true;
  }

  scrollToSection(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
  }
}
