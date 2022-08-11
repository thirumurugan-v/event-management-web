import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDto } from '../models/category-dto';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryHttpService {

  private apiBaseURL: string;

  constructor( private httpClient: HttpClient, private configService: ConfigService) {
    this. apiBaseURL = this.configService.apiBaseUrl;
  }

  // http get api call to get the categories list
  public getCategoryList(): Observable<CategoryDto[]>{
    var apiURL = this.apiBaseURL + 'Category/Get';

    return this.httpClient.get<CategoryDto[]>(apiURL);
  }
}
