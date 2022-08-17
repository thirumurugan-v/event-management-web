import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'events',
    loadChildren: () => import('./modules/events/events.module')
      .then(mod => mod.EventsModule)
  },
  {
    path: 'group',
    loadChildren: () => import('./modules/group/group.module')
      .then(mod => mod.GroupModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
