import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Event } from '../../models/event';
import { EventDataService } from '../../services/data/event-data.service';

@Component({
  selector: 'app-find-events',
  templateUrl: './find-events.component.html',
  styleUrls: ['./find-events.component.scss']
})
export class FindEventsComponent implements OnInit, OnDestroy {

  eventList: Event[] = [];

  private eventDataSubscription: Subscription = new Subscription;

  constructor(
    private eventDataService: EventDataService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  ngOnDestroy(): void {
    this.eventDataSubscription.unsubscribe();
  }

  // Get the list of events from the data service.
  private getEvents(){
    this.eventDataService.retrieveEventList();

    this.eventDataSubscription = this.eventDataService.getEventList().subscribe((data) => {
      this.eventList = data;
    });
  }
}
