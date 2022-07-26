import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { categoryList, dateList, typeList } from '../../constants/select-options'

@Component({
  selector: 'app-event-filters',
  templateUrl: './event-filters.component.html',
  styleUrls: ['./event-filters.component.scss']
})
export class EventFiltersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dateList = dateList;
  typeList = typeList;
  categoryList = categoryList;

  dateControl = new FormControl(dateList[0].key);
  typeControl = new FormControl(typeList[0].key);
  categoryControl = new FormControl(categoryList[0].key);

  form = new FormGroup({
    date: this.dateControl,
    type: this.typeControl,
    category: this.categoryControl,
  });
}
