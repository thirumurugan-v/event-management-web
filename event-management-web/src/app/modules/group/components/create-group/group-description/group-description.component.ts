import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'create-group-description',
  templateUrl: './group-description.component.html',
  styleUrls: ['./group-description.component.scss']
})
export class GroupDescriptionComponent implements OnInit {

  @Input() formGroup!: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
