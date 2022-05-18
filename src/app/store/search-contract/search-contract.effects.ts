import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchContractStoreService } from './search-contract-store.service';
import { searchContractActions } from './search-contract.actions';

@Injectable()
export class SearchContractEffect {
  referenceNumberChangeEffect$ = createEffect(() =>
    combineLatest([
      this.searchContractStoreService.accountNumber$,
      this.searchContractStoreService.subscriptionId$,
    ]).pipe(
      map(([accountNumber, subscriptionId]) => {
        return searchContractActions.updateReferencenumber({
          referenceNumber: `++++${accountNumber} + ${subscriptionId}+++`,
        });
      })
    )
  );
  constructor(private searchContractStoreService: SearchContractStoreService) {}
}
