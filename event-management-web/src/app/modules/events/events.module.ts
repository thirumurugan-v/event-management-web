import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventRoutingModule } from './event-routing.module';
import { FindEventsComponent } from './pages/find-events/find-events.component';
import { SharedModule } from '../shared/shared.module';
import { EventFiltersComponent } from './components/event-filters/event-filters.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    EventsComponent,
    FindEventsComponent,
    EventFiltersComponent,
    EventListComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class EventsModule { }
