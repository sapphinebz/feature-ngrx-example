import { createReducer } from '@ngrx/store';
import { ClaimRequestState } from './claim-request.models';

export const claimRequestReducer = createReducer<ClaimRequestState>({
  claimId: 0,
  claimName: '',
});
