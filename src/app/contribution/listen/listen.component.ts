import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
export class ListenComponent implements OnInit {

  records = [];
  loadedRecord;
  page = 1;
  totalPage: number;
  hidden: boolean;
  hasLike: boolean;
  hasDislike: boolean;

  constructor() { }

  ngOnInit() {
    this.fetchRecording();
  }

  fetchRecording = async () => {
    console.log('Token', localStorage.getItem('token'));
    try {
      const data = await fetch(
        'https://voiceviettest.herokuapp.com/recorder/recordings?page=' + this.page + '&per_page=1', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Bearer ${localStorage.getItem('token')}`
          },
        }
      );
      const response = await data.json();
      console.log(response);
      this.totalPage = response.totalItems;
      for (const record of response.recordings) {
        this.records.push(record);
        this.loadedRecord = record;
      }
    } catch (err) {
      console.log('Error', err);
    }
  }

  next() {
    this.hasLike = false;
    this.hasDislike = false;
    if (this.page < this.totalPage) {
      this.page++;
      this.fetchRecording();
    } else {
      this.hidden = true;
    }
  }

  like() {
    this.hasLike = true;
    this.hasDislike = false;
  }

  dislike() {
    this.hasDislike = true;
    this.hasLike = false;
  }



}
