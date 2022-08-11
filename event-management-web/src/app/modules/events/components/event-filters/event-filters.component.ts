import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { categoryList, dateList, typeList } from '../../constants/select-options'
import { eventFilters } from '../../models/search-filter';
import { SelectOption } from '../../models/select-option-model';
import { CategoryDataService } from '../../services/data/category-data.service';

@Component({
  selector: 'app-event-filters',
  templateUrl: './event-filters.component.html',
  styleUrls: ['./event-filters.component.scss']
})
export class EventFiltersComponent implements OnInit {

  @Output() applyFilters = new EventEmitter<eventFilters>();

  constructor(private categoryDataService: CategoryDataService) { }

  ngOnInit(): void {
    this.categoryDataService.getCategoryList()
    .subscribe((result) => {
      this.categoryList = result;
    })
  }

  dateList = dateList;
  typeList = typeList;
  categoryList : SelectOption[] = [];

  dateControl = new FormControl(dateList[0].key);
  typeControl = new FormControl(typeList[0].key);
  categoryControl = new FormControl(categoryList[0].key);

  form = new FormGroup({
    date: this.dateControl,
    type: this.typeControl,
    category: this.categoryControl,
  });

  filterChanged() {
    this.applyFilters.emit({ dateId: this.form.controls.date.value, typeId: this.form.controls.type.value, categoryId: this.form.controls.category.value } as eventFilters );
  }
}
