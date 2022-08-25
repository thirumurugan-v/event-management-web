import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {catchError, map, switchMap} from 'rxjs/operators';
import { GroupHttpService } from '../services/http/group-http.service';
import { createGroupAction, createGroupError, createGroupSuccess } from './group.actions';

@Injectable()
export class GroupEffects {
  createGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createGroupAction),
      switchMap(({groupData}) => this.groupHttpService.createGroup(groupData).pipe(
        map(result => createGroupSuccess({IsSuccess: result})),
        catchError((err) => [createGroupError({error: err})])
      ))
    )
  );

  constructor(private actions$: Actions, private groupHttpService: GroupHttpService) {
  }
}
