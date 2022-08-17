import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { searchEvent } from '../../models/search-filter';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<searchEvent>();

  constructor() { }

  locationControl = new FormControl();
  form = new FormGroup({
    keyword: new FormControl(),
    location: this.locationControl
  });

  ngOnInit() {
  }

  // #TO-DO make api call on the search button click
  searchEvents(){
    this.searchEvent.emit({ keyword: this.form.controls.keyword.value, locationId: this.form.controls.location.value?.id } as searchEvent );
  }

}
