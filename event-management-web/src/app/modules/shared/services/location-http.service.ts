import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationListDto } from '../models/location-list-dto';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class LocationHttpService {

  private apiBaseURL: string;

  constructor( private httpClient: HttpClient, private configService: ConfigService) {
    this. apiBaseURL = this.configService.apiBaseUrl;
  }

  // makes http get api call to get the event list dto
  public getLocationList(searchKey: string): Observable<LocationListDto>{
    var apiURL = this.apiBaseURL + 'Location/Get?searchText=' + searchKey ;

    return this.httpClient.get<LocationListDto>(apiURL);
  }
}
