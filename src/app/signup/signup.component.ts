import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClientModule, private router: Router) { }

  @ViewChild('firstName', { static: false }) firstNameRef: ElementRef;
  @ViewChild('lastName', { static: false }) lastNameRef: ElementRef;
  @ViewChild('email', { static: false }) emailRef: ElementRef;
  @ViewChild('password', { static: false }) passwordRef: ElementRef;

  ngOnInit() {
  }

  onSignUp = async () => {
    const first = this.firstNameRef.nativeElement.value;
    const last = this.lastNameRef.nativeElement.value;
    const em = this.emailRef.nativeElement.value;
    const pass = this.passwordRef.nativeElement.value;
    const res = await fetch('https://voiceviettest.herokuapp.com/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            // Change the example value here
            firstName: first,
            lastName: last,
            email: em,
            password: pass
        })
    });
    const response = await res.json();
    console.log('Sign Up Response', response);
    if (response.status !== 422) {
      this.router.navigate(['/signin']);
    } else {
      alert('Email already exists!');
    }
  }

}
