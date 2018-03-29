import { Component, OnInit } from '@angular/core';

import { JOBS } from '../shared/jobs_';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  heroes: any[] = [];
  canFly = true;
  mutate = true;
  title = 'Flying Heroes (pure pipe)';
  country:'';

  constructor() { this.reset(); }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
   // var country = this.country.trim();
    let hero = {name, country: this.country};


    if (this.mutate) {
    // Pure pipe won't update display because heroes array reference is unchanged
    // Impure pipe will display
    this.heroes.push(hero);
    } else {
      // Pipe updates display because heroes array is a new object
      this.heroes = this.heroes.concat(hero);
    }
  }

  reset() { this.heroes = JOBS.slice(); }
}

  

