import { Selector } from '@ngrx/store';
import { AppState } from './root-store.models';

export const user: Selector<AppState, AppState['user']> = (state) => state.user;

export const searchContract: Selector<AppState, AppState['searchContract']> = (
  state
) => state.searchContract;

export const claimRequest: Selector<AppState, AppState['claimRequest']> = (
  state
) => state.claimRequest;
