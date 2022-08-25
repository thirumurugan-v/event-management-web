import { CreateGroup } from "../models/create-group";

export const createGroupKey = 'createGroup';

export interface State {
    createGroup: createGroupState;
}

export interface createGroupState {
    data : CreateGroup | null;
    error : string | null;
    IsSuccess : boolean | null;
}
