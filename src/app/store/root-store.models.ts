import { ClaimRequestState } from './claim-request/claim-request.models';
import { SearchContractState } from './search-contract/search-contract.models';

export interface AppState {
  user: string;
  claimRequest?: ClaimRequestState;
  searchContract?: SearchContractState;
}

export type KeyFeatureState = keyof AppState;
