import { Component, OnInit } from '@angular/core';

declare var init: any;
declare var record: any;
declare var stopRecord: any;
declare var uploadFile: any;
@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.css'  ]
})
export class ContributionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  init() {
    init();
  }

  record() {
    record();
  }

  stopRecord() {
    stopRecord();
  }

  uploadFile() {
    uploadFile();
  }
}
