import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap, startWith, map} from 'rxjs/operators';
import { LocationDto } from '../../../shared/models/location-list-dto';
import { LocationHttpService } from '../../../shared/services/location-http.service';
import { searchEvent } from '../../models/search-filter';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<searchEvent>();

  constructor(
    private locationHttpService: LocationHttpService) { }

  filteredOptions!: Observable<LocationDto[]>;
  selectedLocation = '';
  locationControl = new FormControl();
  form = new FormGroup({
    keyword: new FormControl(),
    location: this.locationControl
  });

  ngOnInit() {
    this.filteredOptions = this.form.controls.location.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
            return this.filter(val || '')
       })
    );
  }

  filter(val: string): Observable<LocationDto[]> {
    // Initiate the http request only after 3 characters entered
    if(val.length > 2){
      // call the service which makes the http-request
      return this.locationHttpService.getLocationList(val)
       .pipe(
         map(response => response.locations)
       )
    }
    else
      return of([]);
   }

  // #TO-DO make api call on the search button click
  searchEvents(){
    this.searchEvent.emit({ keyword: this.form.controls.keyword.value, locationId: this.form.controls.location.value?.id } as searchEvent );
  }

  displayFn(location: LocationDto): string {
    if(location !== undefined && location !== null){
      this.selectedLocation = location.location;
      return location.location;
    } else
    return ''
  }

  // holds the selected location for validation check
  locationClick(event: any) {
    this.selectedLocation = event.option.value;
  }

  // validates whether the selected text is not modified and a valid location
  checkLocation() {
   setTimeout(()=> {
    if (!this.selectedLocation || this.selectedLocation !== this.form.controls.location.value) {
      this.form.controls.location.setValue(null);
      this.selectedLocation = '';
    }
   }, 200);
  }

}
