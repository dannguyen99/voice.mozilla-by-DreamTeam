import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
export class ListenComponent implements OnInit {

  records = [];

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
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh1Z2hqYWNrbWFuMmtAZ21haWwuY29tIiwidXNlcklEIjoiNWU2M2I5NGI4ZTdhYjI0M2E4NDhlZGQ5IiwiaWF0IjoxNTg1MTI5Nzg5LCJleHAiOjE1ODUxMzMzODl9.rB9cihoacmvhuqizjI8ZxuHB0PCFrlDn_Zo_iVIYn_o'
          },
        }
      );
      const response = await data.json();
      console.log(response);
      for (const record of response.recordings) {
        this.records.push(record);
      }
    } catch (err) {
      console.log('Error', err);
    }
  }

}
