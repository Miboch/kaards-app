import {UserStateModel} from '../interfaces/user-state.model';
import * as userActions from '../actions/user.action';
import {Action, createReducer, on} from '@ngrx/store';

export const defaultUserState: UserStateModel = {
  isLoggedIn: false,
  token: "",
  username: ""
}

const userReducer = createReducer(
  defaultUserState,
  on(userActions.setLoggedInState, (state, {loginState}) => ({...state, isLoggedIn: loginState}))
)

export function userStateReducer(state: UserStateModel | undefined = defaultUserState, action: Action) {
  return userReducer(state, action);
}
