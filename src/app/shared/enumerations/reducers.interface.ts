import { ActionReducer } from '@ngrx/store';

export interface MapReducers<T> {
  [actionType: string]: ActionReducer<T>;
}
