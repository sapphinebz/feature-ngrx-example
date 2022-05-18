import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './root-store.models';
import * as RootSelectors from './root-store.selectors';

@Injectable({
  providedIn: 'root',
})
export class RootStoreService {
  user$ = this.store.select(RootSelectors.user);
  searchContract$ = this.store.select(RootSelectors.searchContract);
  claimRequest$ = this.store.select(RootSelectors.claimRequest);

  constructor(public store: Store<AppState>) {}
}
