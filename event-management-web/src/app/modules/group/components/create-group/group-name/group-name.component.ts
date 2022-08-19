import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'create-group-name',
  templateUrl: './group-name.component.html',
  styleUrls: ['./group-name.component.scss']
})
export class GroupNameComponent implements OnInit {

  @Input() formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
