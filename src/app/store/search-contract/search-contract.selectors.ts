import { createSelector } from '@ngrx/store';
import * as RootSelectors from '@store/root-store.selectors';

export const subscriptionId = createSelector(
  RootSelectors.searchContract,
  (state) => state?.subscriptionId
);

export const accountNumber = createSelector(
  RootSelectors.searchContract,
  (state) => state?.accountNumber
);
