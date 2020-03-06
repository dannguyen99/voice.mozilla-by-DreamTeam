import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loadedFeature = 'benefits';
  imagePath = '/assets/image/benefit1.png';

  constructor() { }

  ngOnInit() {
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  onChooseImage(choice: string) {
    switch (choice) {
      case 'benefit1': this.imagePath = '/assets/image/benefit1.png'; break;
      case 'benefit2': this.imagePath = '/assets/image/benefit2.png'; break;
      case 'benefit3': this.imagePath = '/assets/image/benefit3.png'; break;
      case 'benefit4': this.imagePath = '/assets/image/benefit4.png'; break;
      case 'benefit5': this.imagePath = '/assets/image/benefit5.png'; break;
      case 'benefit6': this.imagePath = '/assets/image/benefit6.png'; break;
      case 'public1': this.imagePath = '/assets/image/public1.png'; break;
      case 'public2': this.imagePath = '/assets/image/public2.png'; break;
      case 'public3': this.imagePath = '/assets/image/public3.png'; break;
      case 'public4': this.imagePath = '/assets/image/public4.png'; break;
      case 'public5': this.imagePath = '/assets/image/public5.png'; break;
    }
  }

}
