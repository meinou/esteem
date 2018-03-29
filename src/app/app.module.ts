import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MatM} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import 'hammerjs';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { JoblistComponent } from './joblist/joblist.component';

import {JobsFilterPipe, JobsFilterImpurePipe} from './shared/jobsfilter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    JoblistComponent,
    JobsFilterPipe,
    JobsFilterImpurePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
