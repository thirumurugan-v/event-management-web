import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'create-group-location',
  templateUrl: './group-location.component.html',
  styleUrls: ['./group-location.component.scss']
})
export class GroupLocationComponent implements OnInit {

  @Input() formGroup!: FormGroup;
  @Input() locationControl!: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
