import { Injectable } from '@angular/core';

import {Job} from '../shared/job';
import {JOBS} from '../shared/jobs_';


@Injectable()
export class JobService {

  constructor() { }

  getJobs(): Job[] {
    return JOBS;
  }
  getJob(id: number): Job {
    return JOBS.filter((job) => (job.id === id))[0];
  }

}
