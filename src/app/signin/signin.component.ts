import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  constructor(private http: HttpClientModule, private router: Router, private authService: AuthService) { }

  @ViewChild('email', { static: false }) emailRef: ElementRef;
  @ViewChild('password', { static: false }) passwordRef: ElementRef;

  ngOnInit() {
  }

  onLogin() {
    const em = this.emailRef.nativeElement.value;
    const pass = this.passwordRef.nativeElement.value;

    this.authService.login(em, pass);
  }
}
