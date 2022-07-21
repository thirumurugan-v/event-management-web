import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventRoutingModule } from './event-routing.module';
import { FindEventsComponent } from './pages/find-events/find-events.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EventsComponent,
    FindEventsComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    SharedModule
  ]
})
export class EventsModule { }
