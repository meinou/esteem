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
import {JobListComponentJSON  } from './test/job-list.component';

import {JobsFilterPipe, JobsFilterImpurePipe} from './shared/jobsfilter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {FetchJsonPipe} from './shared/fetch-json.pipe';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProfileComponent } from './profile/profile.component';
import { JobdetailComponent } from './jobdetail/jobdetail.component';
import { HeroListComponent } from './test/hero-list.component';

import {JobService} from './services/job.service';

import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    JoblistComponent,
    JobsFilterPipe,
    JobsFilterImpurePipe,
    HeroListComponent,
    FetchJsonPipe,
    JobListComponentJSON,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    ProfileComponent,
    JobdetailComponent 
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
    HttpModule,
    AppRoutingModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
