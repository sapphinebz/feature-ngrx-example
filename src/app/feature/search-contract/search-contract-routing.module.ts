import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchContractComponent } from './search-contract.component';

const routes: Routes = [{ path: '', component: SearchContractComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchContractRoutingModule { }
