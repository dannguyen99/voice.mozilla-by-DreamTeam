import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loadedFeature = 'benefits';

  constructor() { }

  ngOnInit() {
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }



}
