import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
export class ListenComponent implements OnInit {

  records = [];
  loadedRecord;
  i = 0;

  constructor() { }

  ngOnInit() {
    this.fetchRecording();
  }

  fetchRecording = async () => {
    try {
      const data = await fetch(
        'https://voiceviettest.herokuapp.com/recorder/recordings?page={{page}}&per_page={{per_page}}', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pbmhkdWMxMDAyOThAZ21haWwuY29tIiwidXNlcklEIjoiNWU3OTdlNmU1NTM4YjEwMDE3Mjc0ZTM2IiwiaWF0IjoxNTg1MTkyNDAyLCJleHAiOjE1ODUxOTYwMDJ9.ZsgOIwzVTaT3d2VnAVrAaHwQwmS4tg43tHEiLgPjj5k'
          },
        }
      );
      const response = await data.json();
      console.log(response);
      for (const record of response.recordings) {
        this.records.push(record);
      }
      this.loadedRecord = this.records[this.i];
    } catch (err) {
      console.log('Error', err);
    }
  }

  next() {
    this.i++;
    this.fetchRecording();
  }

}
