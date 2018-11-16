import { UserState } from './user.state';
import { UserActionsTypes, RegisterUserAction, SwitchRoleAction, IsUserLoggedInAction } from './user.actions';
import { ActionReducer, Action } from '@ngrx/store';
import { MapReducers } from 'src/app/shared/enumerations/reducers.interface';

const initialState: UserState = {
  username: null,
  userType: null,
  isLoggedIn: false
};

function addUser(state: UserState, action: RegisterUserAction) {
  const newState = Object.assign({}, state);
  newState.username = action.payload.username;
  return newState;
}

function switchRoles(state: UserState, action: SwitchRoleAction) {
  return Object.assign({}, state, {
    userType: action.payload
  });
}

function loggedInUser(state: UserState, action: IsUserLoggedInAction) {
  const newState = Object.assign({}, state);
  newState.isLoggedIn = action.payload;
  return newState;
}

const mapUserReducers: MapReducers<UserState> = {
  [UserActionsTypes.REGISTER_USER]: addUser,
  [UserActionsTypes.SWITCH_ROLE]: switchRoles,
  [UserActionsTypes.LOGGED_USER]: loggedInUser
};

export function userReducer(state = initialState, action: Action) {
  return mapUserReducers[action.type] != null ?
    mapUserReducers[action.type](state, action) :
    state;
}
