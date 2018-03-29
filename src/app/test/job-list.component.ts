import { Component } from '@angular/core';

@Component({
  selector: 'app-job-list',
  template: `
    <h2>Heroes from JSON File</h2>

    <div *ngFor="let hero of ('assets/jobs.json' | fetch) ">
      {{hero.name}}
    </div>

    <p>Heroes as JSON:
      {{'assets/heroes.json' | fetch | json}}
    </p>`
})
export class JobListComponent { }