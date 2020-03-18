import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-features',
  templateUrl: './main-features.component.html',
  styleUrls: ['./main-features.component.css']
})
export class MainFeaturesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

}
