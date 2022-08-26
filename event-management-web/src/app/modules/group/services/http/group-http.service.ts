import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { ConfigService } from 'src/app/modules/shared/services/config.service';
import { CreateGroup } from '../../models/create-group';

@Injectable({
  providedIn: 'root'
})
export class GroupHttpService {

  private apiBaseURL: string;

  constructor( private httpClient: HttpClient, private configService: ConfigService) {
    this. apiBaseURL = this.configService.apiBaseUrl;
  }

  // makes http get api call to get the event list dto
  public createGroup(createGroup : CreateGroup): Observable<boolean>{
    var apiURL = this.apiBaseURL + 'Group/Create';

    // return this.httpClient.post<string>(apiURL, createGroup);
    return of(true);

    return throwError(() => 'Not created');
  }
}
