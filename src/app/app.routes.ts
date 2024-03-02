import { Routes } from '@angular/router';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';

export const routes: Routes = [
  {
    path: 'id',
    component: LaunchListComponent,
  },
  {
    path: 'id',
    component: LaunchDetailsComponent,
  },
];
