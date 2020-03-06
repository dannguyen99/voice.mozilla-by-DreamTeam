import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-benefit-login',
  templateUrl: './benefit-login.component.html',
  styleUrls: ['./benefit-login.component.css']
})
export class BenefitLoginComponent implements OnInit {

  @Output() choiceSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  select(choice: string) {
    this.choiceSelected.emit(choice);
  }

}
