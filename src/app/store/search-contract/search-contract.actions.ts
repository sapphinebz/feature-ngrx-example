import { createActionGroup, props } from '@ngrx/store';
import { SearchContractState } from './search-contract.models';

export const searchContractActions = createActionGroup({
  source: 'SEARCH CONTRACT',
  events: {
    'Update referenceNumber':
      props<Pick<SearchContractState, 'referenceNumber'>>(),
  },
});
