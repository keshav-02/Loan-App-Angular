import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private route:Router){}
  title = 'Assig5';
  message="from parent!";
  
  // result(obj1:object) {
  //   alert(obj1.name1 + " " + obj1.name2);
  // }
}
