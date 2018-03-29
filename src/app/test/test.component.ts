import { Component, OnInit } from '@angular/core';

import { JOBS } from '../shared/jobs_';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  heroes: any[] = [];
  jobs: any[] = [];
  mutate = true;
  title = 'JobsFilter (pure pipe)';
  country:'';

  constructor() { this.reset(); }

  addJob(name: string, country:string) {
    name = name.trim();
    if (!name) { return; }
   // var country = this.country.trim();
    let job = {name, country};


    if (this.mutate) {
    // Pure pipe won't update display because heroes array reference is unchanged
    // Impure pipe will display
      this.jobs.push(job);
    } else {
      // Pipe updates display because heroes array is a new object
      this.jobs = this.jobs.concat(job);
    }
  }

  reset() { this.jobs = JOBS.slice(); }
}

  

