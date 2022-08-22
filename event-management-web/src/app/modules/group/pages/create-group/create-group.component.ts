import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectOption } from 'src/app/modules/events/models/select-option-model';
import { CategoryDataService } from 'src/app/modules/events/services/data/category-data.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  categoryList : SelectOption[] = [];
  locationControl = new FormControl(null, Validators.required);
  
  firstStep : FormGroup = this.formBuilder.group({
    locationControl: this.locationControl
  });

  secondStep = this.formBuilder.group({
    categoryControl: ['', Validators.required]
  });

  thirdStep = this.formBuilder.group({
    nameControl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
  });

  fourthStep = this.formBuilder.group({
    descriptionControl: ['',  [Validators.required, Validators.minLength(100), Validators.maxLength(4000)]]
  });

  fifthStep = this.formBuilder.group({
    termsControl: [false, Validators.requiredTrue]
  });

  constructor(private formBuilder: FormBuilder,
    private categoryDataService: CategoryDataService) {}

  ngOnInit(): void {
    this.categoryDataService.retrieveCategoryList();
    
    this.categoryDataService.getCategoryList()
    .subscribe((result) => {
      this.categoryList = result;
    })
  }

  submit(){
    debugger;
  }
}
