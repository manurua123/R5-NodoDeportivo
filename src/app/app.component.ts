import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'R5-NODO-DEPORTIVO';
  idioma: string = 'esp';
  isDropdownOpen: boolean = true;

  constructor(){}



  ngOnInit() {

  }

}





