import { Component, OnInit, Input } from '@angular/core';

import { Job } from '../shared/job';
import { JobService } from '../services/job.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-jobdetail',
  templateUrl: './jobdetail.component.html',
  styleUrls: ['./jobdetail.component.scss']
})

export class JobdetailComponent implements OnInit {

  job: Job;

  constructor(private jobService: JobService,              
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    console.log(id);
    this.job = this.jobService.getJob(id);
  }

  goBack(): void{
    this.location.back();
  }

}
