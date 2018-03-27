import { Component, OnInit } from '@angular/core';

import {JOBS} from '../shared/jobs'

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.scss']
})
export class JoblistComponent implements OnInit {

  jobs = JOBS;
  constructor() { }

  ngOnInit() {
  }

}
