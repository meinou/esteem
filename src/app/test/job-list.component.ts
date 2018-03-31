import { Component } from '@angular/core';

@Component({
  selector: 'app-job-list-json',
  template: `
    <h2>Jobs from JSON File</h2>

    <div *ngFor="let job of ('assets/jobs.json' | fetch) ">
      {{job.name}} <span> in {{ job.country}} </span>
    </div>

    <p>Jobs as JSON:
      {{'assets/jobs.json' | fetch | json}}
    </p>`
})
export class JobListComponentJSON { }