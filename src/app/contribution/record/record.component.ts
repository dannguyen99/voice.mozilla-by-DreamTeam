import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var init: any;
declare var record: any;
declare var stopRecord: any;
declare var uploadFile: any;

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  constructor(private http: HttpClient) { }

  imagePath = '/assets/image/record_voice.png';
  quotes = [];

  fetchPost = async () => {
    try {
      const data = await fetch(
        'https://voiceviettest.herokuapp.com/quotes?page={{page}}&per_page={{per_page}}', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pbmhkdWMxMDAyOThAZ21haWwuY29tIiwidXNlcklEIjoiNWU3OTdlNmU1NTM4YjEwMDE3Mjc0ZTM2IiwiaWF0IjoxNTg1MDIxNjUzLCJleHAiOjE1ODUwMjUyNTN9.LhcVldXyCqTxYYQ-LMReHY5TiZAJQxj5MjmcZ7Vkq5I'
          },
        }
      );
      const response = await data.json();
      for (const quote of response.quotes) {
        this.quotes.push(quote);
      }
    } catch (err) {
      console.log('Error', err);
    }
  }

  signUp = async () => {
    const res = await fetch('https://voiceviettest.herokuapp.com/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer token' // Only need this for protected endpoints
        },
        body: JSON.stringify({
            // Change the example value here
            firstName: 'Duc',
            lastName: 'Do Dang Minh',
            email: 'minhduc100298@gmail.com',
            password: "md310298"
        })
    });
    const response = await res.json();
    console.log('Response', response);
  }

  signIn = async () => {
    const res = await fetch('https://voiceviettest.herokuapp.com/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer token' // Only need this for protected endpoints
        },
        body: JSON.stringify({
            // Change the example value here
            email: 'minhduc100298@gmail.com',
            password: 'md310298'
        })
    });
    const response = await res.json();
    console.log('Sign In Response', response);
  }

  ngOnInit() {
    this.fetchPost();
    // this.signUp();
    this.signIn();
    init();
  }

  record() {
    this.imagePath = '/assets/image/stop.png';
    record();
  }

  stopRecord() {
    this.imagePath = '/assets/image/record_voice.png';
    stopRecord();
    uploadFile();
  }

}
