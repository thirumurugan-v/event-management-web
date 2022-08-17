import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectOption } from 'src/app/modules/events/models/select-option-model';
import { CategoryDataService } from 'src/app/modules/events/services/data/category-data.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  categoryList : SelectOption[] = [];
  locationControl = new FormControl(null, Validators.required);
  createGroup = new FormGroup({
    'location' : new FormGroup({
      locationControl: this.locationControl
    }),
    'category' : new FormGroup({
      categoryControl: new FormControl(Validators.required)
    }),
    'name' : new FormGroup({
      nameControl: new FormControl(null, Validators.required)
    }),
    'description' : new FormGroup({
      descriptionControl: new FormControl(null, Validators.required)
    }),
    'terms' : new FormGroup({
      termsControl: new FormControl(null, Validators.required)
    }),
  })

  constructor(private formBuilder: FormBuilder,
    private categoryDataService: CategoryDataService) {}

  ngOnInit(): void {
    this.categoryDataService.retrieveCategoryList();
    
    this.categoryDataService.getCategoryList()
    .subscribe((result) => {
      this.categoryList = result;
    })
  }

}
