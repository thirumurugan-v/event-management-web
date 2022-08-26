import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { CreateGroup } from '../../models/create-group';
import { createGroupAction } from '../../store/group.actions';
import { selectCreateGroupError, selectCreateGroupSuccess } from '../../store/group.selector';
import { State } from '../../store/group.state';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  locationControl = new FormControl(null, Validators.required);
  categoryControl = new FormControl([], Validators.required);
  
  firstStep : FormGroup = this.formBuilder.group({
    locationControl: this.locationControl
  });

  secondStep = this.formBuilder.group({
    categoryControl: this.categoryControl
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

  createGroupIsSuccess$ = this.store.select(selectCreateGroupSuccess);
  createGroupError$ = this.store.select(selectCreateGroupError);

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<State>,
    private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.createGroupIsSuccess$.subscribe((result)=> {
      if(result != undefined){
        this.snackbarService.showMessage('Your Group \'' + this.thirdStep.controls['nameControl'].value + '\' Successfully Created.');

        setTimeout(() => {
          // redirecting to home page, but needs to be changed to details page of the group.
          this.router.navigate(["../../"]);
        }, 2000);
      }
    })

    this.createGroupError$.subscribe((err)=> {
      if(err != undefined){
        this.snackbarService.showMessage('Unable to create the group. Please try again.')
      }
    })
  }

  submit(){
    var group : CreateGroup = {
      name: this.thirdStep.controls['nameControl'].value,
      groupCategory : this.secondStep.controls['categoryControl'].value,
      description: this.fourthStep.controls['descriptionControl'].value,
      location: this.firstStep.controls['locationControl'].value,
    };
    this.store.dispatch(createGroupAction({ groupData: group }));
  }
}
