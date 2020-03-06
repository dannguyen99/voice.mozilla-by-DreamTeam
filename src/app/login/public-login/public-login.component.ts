import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-public-login',
  templateUrl: './public-login.component.html',
  styleUrls: ['./public-login.component.css']
})
export class PublicLoginComponent implements OnInit {

  @Output() choiceSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  select(choice: string) {
    this.choiceSelected.emit(choice);
  }


}
