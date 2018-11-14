import { UserState } from './user.state';
import { UserActionsTypes, RegisterUserAction, SwitchRoleAction } from './user.actions';
import { ActionReducer, Action } from '@ngrx/store';

const initialState: UserState = {
  username: null,
  userType: null
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

const mapUserReducers: { [actionType: string]: ActionReducer<UserState> } = {
  [UserActionsTypes.REGISTER_USER]: addUser,
  [UserActionsTypes.SWITCH_ROLE]: switchRoles
};

export function userReducer(state = initialState, action: Action) {
  return mapUserReducers[action.type] != null ?
    mapUserReducers[action.type](state, action) :
    state;
}
