import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EventListDto } from '../../models/event-list-dto';
import { EventHttpService } from '../http/event-http.service';
import { Event } from '../../models/event';
import { SearchEventRequest } from '../../models/search-filter';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  private eventList$: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);
  private eventList: Event[] = [];

  constructor(private eventHttpService: EventHttpService) { }

  // make the api call and publish the response to the Event list observable.
  public retrieveEventList(eventSearchRequestData : SearchEventRequest){
    this.eventHttpService.getEventList(eventSearchRequestData).subscribe((result: EventListDto) => {
      this.eventList = [];
      this.MapEventData(result);
      this.eventList$.next(this.eventList);
    });
  }

  // returns the event list as the observable
  public getEventList(): Observable<Event[]> {
    return this.eventList$.asObservable();
  }

  private MapEventData(result: EventListDto) {
    result.events.forEach(item => {
      var event: Event = {
        id: item.id,
        name: item.name,
        groupName: item.groupName,
        startTime: item.startTime,
        isOnlineEvent: item.isOnlineEvent,
        noOfPeopleGoing: item.noOfPeopleGoing,
        thumbnailImagePath: item.thumbnailImagePath,
        locationName: item.locationName
      };
      this.eventList.push(event);
    });
  }
}
