import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const userFeature = createFeatureSelector<UserState>(UserState.stateName);

export const userDataSelector = createSelector(
  userFeature,
  state => state.username
);

export const userTypeSelector = createSelector(
  userFeature,
  state => state.userType
);

