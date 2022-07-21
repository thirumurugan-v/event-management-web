import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { FindEventsComponent } from './pages/find-events/find-events.component';

const routes: Routes = [
  { path: '', component: EventsComponent, children: [] },
  { path: 'find', component: FindEventsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
