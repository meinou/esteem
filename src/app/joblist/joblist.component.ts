import { Component, OnInit } from '@angular/core';

import {Job} from '../shared/job';
import {JobService} from '../services/job.service';

import { JobdetailComponent } from '../jobdetail/jobdetail.component';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.scss']
})
export class JoblistComponent implements OnInit {

  jobs : Job[]; //= JOBS;
  selectedJob: Job;
  
  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobs = this.jobService.getJobs();
  }

  onSelect(job: Job) {
    this.selectedJob = job;
  }
}
