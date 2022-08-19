import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';
import { CreateGroupComponent } from './pages/create-group/create-group.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { GroupLocationComponent } from './components/create-group/group-location/group-location.component';
import { GroupCategoryComponent } from './components/create-group/group-category/group-category.component';
import { GroupNameComponent } from './components/create-group/group-name/group-name.component';
import { GroupDescriptionComponent } from './components/create-group/group-description/group-description.component';
import { GroupTermsComponent } from './components/create-group/group-terms/group-terms.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    GroupComponent,
    CreateGroupComponent,
    GroupLocationComponent,
    GroupCategoryComponent,
    GroupNameComponent,
    GroupDescriptionComponent,
    GroupTermsComponent
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class GroupModule { }
