import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group.component';
import { CreateGroupComponent } from './pages/create-group/create-group.component';

const routes: Routes = [
  { path: '', component: GroupComponent, children: [] },
  { path: 'create', component: CreateGroupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
