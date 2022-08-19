import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectOption } from 'src/app/modules/events/models/select-option-model';

@Component({
  selector: 'create-group-category',
  templateUrl: './group-category.component.html',
  styleUrls: ['./group-category.component.scss']
})
export class GroupCategoryComponent implements OnInit {

  @Input() formGroup!: FormGroup;
  @Input() categoryList!: SelectOption[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
