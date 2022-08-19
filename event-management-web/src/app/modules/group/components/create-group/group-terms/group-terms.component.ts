import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'create-group-terms',
  templateUrl: './group-terms.component.html',
  styleUrls: ['./group-terms.component.scss']
})
export class GroupTermsComponent implements OnInit {

  @Input() formGroup!: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
