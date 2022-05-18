import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimRequestComponent } from './claim-request.component';

const routes: Routes = [{ path: '', component: ClaimRequestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimRequestRoutingModule { }
