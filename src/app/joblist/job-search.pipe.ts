import {Pipe, PipeTransform} from '@angular/core';

import { JoblistComponent } from './joblist.component';

import { Job } from '../shared/job';

@Pipe ({name:'sortingJobs'})
export class SortingJobs implements PipeTransform {
    transform (Jobs : Job[]) {
        return Jobs.filter(job => job)
    }
}