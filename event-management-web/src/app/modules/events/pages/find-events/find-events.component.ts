import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Event } from '../../models/event';
import { eventFilters, searchEvent, SearchEventRequest } from '../../models/search-filter';
import { CategoryDataService } from '../../services/data/category-data.service';
import { EventDataService } from '../../services/data/event-data.service';

@Component({
  selector: 'app-find-events',
  templateUrl: './find-events.component.html',
  styleUrls: ['./find-events.component.scss']
})
export class FindEventsComponent implements OnInit, OnDestroy {

  eventList: Event[] = [];

  private eventSearchRequestData: SearchEventRequest = {
    keyword: '',
    locationId: 0,
    dateId: 0,
    typeId: 0,
    categoryId: 0
  }
  private eventDataSubscription: Subscription = new Subscription;

  constructor(
    private eventDataService: EventDataService,
    private categoryDataService: CategoryDataService) { }

  ngOnInit(): void {
    this.getEvents();
    this.categoryDataService.retrieveCategoryList();
  }

  ngOnDestroy(): void {
    this.eventDataSubscription.unsubscribe();
  }

  // Get the list of events from the data service.
  private getEvents(){
    this.eventDataService.retrieveEventList(this.eventSearchRequestData);

    this.eventDataSubscription = this.eventDataService.getEventList().subscribe((data) => {
      this.eventList = data;
    });
  }

  triggerSearch(filters: searchEvent){
    this.eventSearchRequestData.keyword = filters.keyword ?? '';
    this.eventSearchRequestData.locationId = filters.locationId;

    this.eventDataService.retrieveEventList(this.eventSearchRequestData);
  }

  applyFilters(filters: eventFilters){
    this.eventSearchRequestData.dateId = filters.dateId;
    this.eventSearchRequestData.typeId = filters.typeId;
    this.eventSearchRequestData.categoryId = filters.categoryId;

    this.eventDataService.retrieveEventList(this.eventSearchRequestData);
  }
}
