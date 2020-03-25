import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SigninComponent } from '../signin/signin.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isAccountDisplay$: Observable<boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.isAccountDisplay$ = this.authService.isAccountDisplay;
  }

}
