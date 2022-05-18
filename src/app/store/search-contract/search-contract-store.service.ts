import { forwardRef, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchContractModule } from 'src/app/feature/search-contract/search-contract.module';
import { AppState } from '../root-store.models';
import * as SearchContractSelectors from './search-contract.selectors';

@Injectable({
  providedIn: forwardRef(() => SearchContractModule),
})
export class SearchContractStoreService {
  accountNumber$ = this.store.select(SearchContractSelectors.accountNumber);
  subscriptionId$ = this.store.select(SearchContractSelectors.subscriptionId);
  constructor(private store: Store<AppState>) {}
}
