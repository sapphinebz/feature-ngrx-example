import { Component } from '@angular/core';
import { RootStoreService } from './store/root-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'feature-ngrx-example';

  constructor(public rootStore: RootStoreService) {}
}
