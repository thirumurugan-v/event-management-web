import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
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

  createGroupIsSuccess$ = this.store.select(selectCreateGroupSuccess);
  createGroupError$ = this.store.select(selectCreateGroupError);

  constructor(private formBuilder: FormBuilder,
    private store: Store<State>) {}

  ngOnInit(): void {
    this.createGroupIsSuccess$.subscribe((result)=> {
      if(result != undefined){
        var test = result;
        debugger;
      }
    })

    this.createGroupError$.subscribe(()=> {
      debugger;
    })
  }

  submit(){
    this.store.dispatch(createGroupAction({ groupData : {name: 'name', groupCategory: [1, 2], description: 'desc', location: 123}}));
  }
}
