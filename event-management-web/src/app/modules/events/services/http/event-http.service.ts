import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/modules/shared/services/config.service';
import { Observable } from 'rxjs';
import { EventListDto } from '../../models/event-list-dto';
import { SearchEventRequest } from '../../models/search-filter';

@Injectable({
  providedIn: 'root'
})
export class EventHttpService {

  private apiBaseURL: string;

  constructor( private httpClient: HttpClient, private configService: ConfigService) {
    this. apiBaseURL = this.configService.apiBaseUrl;
  }

  // makes http get api call to get the event list dto
  public getEventList(eventSearchRequestData : SearchEventRequest): Observable<EventListDto>{
    var apiURL = this.apiBaseURL + 'Event/GetEvents';

    return this.httpClient.post<EventListDto>(apiURL, eventSearchRequestData);
  }
}
