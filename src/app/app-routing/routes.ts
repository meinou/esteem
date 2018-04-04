import { Routes } from '@angular/router';

import { JoblistComponent } from '../joblist/joblist.component';
import { ProfileComponent } from '../profile/profile.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { JobdetailComponent } from '../jobdetail/jobdetail.component';


export const routes: Routes = [
  { path: 'home',  component: JoblistComponent },
  { path: 'profile',     component: ProfileComponent },
  { path: 'contacts',     component: ContactsComponent },
  { path: 'jobdetail/:id',     component: JobdetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];