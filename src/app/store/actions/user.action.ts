import {createAction, props} from '@ngrx/store';

export enum UserActionTypes {
  SET_LOGGED_IN_STATE = "[User]: Logged in state update"
}

export const setLoggedInState = createAction(
  UserActionTypes.SET_LOGGED_IN_STATE,
  props<{ loginState: boolean }>()
);
