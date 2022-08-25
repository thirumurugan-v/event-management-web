import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectOption } from 'src/app/modules/events/models/select-option-model';
import { CategoryDataService } from 'src/app/modules/events/services/data/category-data.service';

@Component({
  selector: 'create-group-category',
  templateUrl: './group-category.component.html',
  styleUrls: ['./group-category.component.scss']
})
export class GroupCategoryComponent implements OnInit {

  @Input() formGroup!: FormGroup;

  categoryList : SelectOption[] = [];
  
  constructor(private categoryDataService: CategoryDataService) { }

  ngOnInit(): void {
    this.categoryDataService.retrieveCategoryList();
    
    this.categoryDataService.getCategoryList()
    .subscribe((result) => {
      this.categoryList = result;
    })
  }
}
