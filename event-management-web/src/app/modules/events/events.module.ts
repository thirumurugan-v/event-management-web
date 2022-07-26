import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventRoutingModule } from './event-routing.module';
import { FindEventsComponent } from './pages/find-events/find-events.component';
import { SharedModule } from '../shared/shared.module';
import { EventFiltersComponent } from './components/event-filters/event-filters.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SearchComponent } from './components/search/search.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    EventsComponent,
    FindEventsComponent,
    EventFiltersComponent,
    EventListComponent,
    EventCardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EventsModule { }
