import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimRequestRoutingModule } from './claim-request-routing.module';
import { ClaimRequestComponent } from './claim-request.component';
import { StoreModule } from '@ngrx/store';
import { claimRequestReducer } from 'src/app/store/claim-request/claim-request.reducers';
import { AppState, KeyFeatureState } from 'src/app/store/root-store.models';

const FEATURE_KEY: KeyFeatureState = 'claimRequest';

@NgModule({
  declarations: [ClaimRequestComponent],
  imports: [
    CommonModule,
    ClaimRequestRoutingModule,
    StoreModule.forFeature(FEATURE_KEY, claimRequestReducer),
  ],
})
export class ClaimRequestModule {}
