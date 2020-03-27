import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(true);
  private accountDisplay = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get isAccountDisplay() {
    return this.accountDisplay.asObservable();
  }

  constructor( private router: Router) {}

  async login(userName: string, pass: string){
    if (userName !== '' && pass !== '' ) {
        this.loggedIn.next(false);
        this.accountDisplay.next(true);
        console.log('UserName', userName);
        console.log('Pass', pass);
        const res = await fetch('https://voiceviettest.herokuapp.com/signin', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer token' // Only need this for protected endpoints
          },
          body: JSON.stringify({
              // Change the example value here
              email: userName,
              password: pass
          })
        });
        const response = await res.json();
        if (response.status !== 401) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/signin']);
          alert('Wrong email or password!');
        }
        console.log('Sign In Response', response);
    }
  }

  logout() {
    this.loggedIn.next(true);
    this.accountDisplay.next(false);
    this.router.navigate(['/home']);
  }


}
