import { Action, createAction, props } from '@ngrx/store';
import { CreateGroup } from '../models/create-group';

export enum GroupActionTypes {
  CreateGroup = '[Group] CreateGroup',
  CreateGroupError = '[Group] CreateGroupError',
  CreateGroupSuccess = '[Group] CreateGroupSuccess'
}

export const createGroupAction = createAction(GroupActionTypes.CreateGroup, props<{groupData: CreateGroup}>());
export const createGroupSuccess = createAction(GroupActionTypes.CreateGroupSuccess, props<{IsSuccess: boolean}>());
export const createGroupError = createAction(GroupActionTypes.CreateGroupError, props<{error: string}>());
