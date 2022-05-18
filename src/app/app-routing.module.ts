import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'claimRequest',
    loadChildren: () =>
      import('./feature/claim-request/claim-request.module').then(
        (m) => m.ClaimRequestModule
      ),
  },
  {
    path: 'searchContract',
    loadChildren: () =>
      import('./feature/search-contract/search-contract.module').then(
        (m) => m.SearchContractModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
