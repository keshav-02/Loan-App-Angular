import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() msg="";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  btnClick(name1:string, name2:string, loanAmt:string) {
    this.router.navigate(['/result'], {state: {data: {name1, name2, loanAmt}}});
  }
}
