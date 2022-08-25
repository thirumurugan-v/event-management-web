import {
  createReducer,
  on,
} from '@ngrx/store';
import { createGroupAction, createGroupSuccess, createGroupError } from './group.actions';
import { createGroupState } from './group.state';

export const initialCreateGroupState: createGroupState = {
  data: {

    name: null,
    groupCategory: null,
    description: null,
    location: null
  },
  error: null,
  IsSuccess: null
};

export const groupReducer = createReducer(
  initialCreateGroupState,
  on(createGroupAction, (state, {groupData}) => ({
    ...state,
    data: groupData
  })),
  on(createGroupSuccess, (state, {IsSuccess}) => ({
    ...state,
    IsSuccess: IsSuccess
  })),
  on(createGroupError, (state, {error}) => ({
    ...state,
    error: error
  }))
);





















