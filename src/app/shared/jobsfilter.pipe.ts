/* tslint:disable use-pipe-transform-interface */
import { Pipe, PipeTransform } from '@angular/core';

import { Job } from './jobs_';

@Pipe({ name: 'jobsfilter' })
export class JobsFilterPipe implements PipeTransform {
  transform(allJobs: Job[], country: string) {
   // this.country = country;
    return allJobs.filter(job => job.country.toLowerCase() == country);
  }
}

/////// Identical except for the pure flag
@Pipe({
  name: 'jobsfilterImpure',
  pure: false
})
export class JobsFilterImpurePipe extends JobsFilterPipe {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/