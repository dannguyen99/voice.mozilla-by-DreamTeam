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
  page = 1;
  loadedQuote;
  // quoteID: any;


  fetchPost = async () => {
    const userToken = localStorage.getItem('token');
    try {
      const data = await fetch(
        'https://voiceviettest.herokuapp.com/quotes?page=' + this.page + '&per_page=1', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Bearer ${userToken}`
          },
        }
      );
      const response = await data.json();
      console.log(response);
      for (const quote of response.quotes) {
        this.quotes.push(quote);
        localStorage.setItem('quoteID', quote._id);
        this.loadedQuote = quote;
      }
    } catch (err) {
      console.log('Error', err);
    }
  }

  ngOnInit() {
    this.fetchPost();
    init();
  }

  record() {
    this.imagePath = '/assets/image/stop.png';
    record();
  }

  stopRecord() {
    this.imagePath = '/assets/image/record_voice.png';
    stopRecord();
  }

  next() {
    this.page++;
    this.fetchPost();
  }

}
