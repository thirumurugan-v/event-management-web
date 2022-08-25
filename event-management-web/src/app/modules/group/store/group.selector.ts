import { createSelector} from '@ngrx/store';
import { createGroupState, State } from './group.state';

export const selectFeature = (state: State) => state.createGroup;

export const selectCreateGroupData = createSelector(selectFeature, (state : createGroupState) => state.data);

export const selectCreateGroupError = createSelector(selectFeature, (state : createGroupState) => state?.error);

export const selectCreateGroupSuccess = createSelector(selectFeature, (state : createGroupState) => state?.IsSuccess);