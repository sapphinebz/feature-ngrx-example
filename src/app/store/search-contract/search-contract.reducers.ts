import { createReducer, on } from '@ngrx/store';
import { searchContractActions } from './search-contract.actions';
import { SearchContractState } from './search-contract.models';

export const searchContractReducers = createReducer<SearchContractState>(
  {
    accountNumber: 0,
    subscriptionId: 0,
    referenceNumber: '',
  },
  on(searchContractActions.updateReferencenumber, (state, action) => {
    return { ...state, referenceNumber: action.referenceNumber };
  })
);
