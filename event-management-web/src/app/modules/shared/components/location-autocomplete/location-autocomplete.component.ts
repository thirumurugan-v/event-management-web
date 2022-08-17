import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, of, startWith, switchMap } from 'rxjs';
import { LocationDto } from '../../models/location-list-dto';
import { LocationHttpService } from '../../services/location-http.service';

@Component({
  selector: 'location-autocomplete',
  templateUrl: './location-autocomplete.component.html',
  styleUrls: ['./location-autocomplete.component.scss']
})
export class LocationAutocompleteComponent implements OnInit {

  @Input() locationControl!: FormControl;
  
  filteredOptions!: Observable<LocationDto[]>;
  selectedLocation = '';

  constructor(private locationHttpService: LocationHttpService) { }

  ngOnInit(): void {
    this.filteredOptions = this.locationControl.valueChanges.pipe(
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
    if (!this.selectedLocation || this.selectedLocation !== this.locationControl.value) {
      this.locationControl.setValue(null);
      this.selectedLocation = '';
    }
   }, 200);
  }
}
