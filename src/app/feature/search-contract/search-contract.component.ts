import { Component, OnInit } from '@angular/core';
import { SearchContractStoreService } from '@store/search-contract/search-contract-store.service';

@Component({
  selector: 'app-search-contract',
  templateUrl: './search-contract.component.html',
  styleUrls: ['./search-contract.component.scss'],
})
export class SearchContractComponent implements OnInit {
  constructor(public searchContractStoreService: SearchContractStoreService) {}

  ngOnInit(): void {}
}
