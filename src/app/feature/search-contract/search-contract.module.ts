import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchContractRoutingModule } from './search-contract-routing.module';
import { SearchContractComponent } from './search-contract.component';
import { StoreModule } from '@ngrx/store';
import { KeyFeatureState } from 'src/app/store/root-store.models';
import { searchContractReducers } from 'src/app/store/search-contract/search-contract.reducers';
import { EffectsModule } from '@ngrx/effects';
import { SearchContractEffect } from '@store/search-contract/search-contract.effects';

const KEY_FEATURE: KeyFeatureState = 'searchContract';

@NgModule({
  declarations: [SearchContractComponent],
  imports: [
    CommonModule,
    SearchContractRoutingModule,
    StoreModule.forFeature(KEY_FEATURE, searchContractReducers),
    EffectsModule.forFeature([SearchContractEffect]),
  ],
})
export class SearchContractModule {}
