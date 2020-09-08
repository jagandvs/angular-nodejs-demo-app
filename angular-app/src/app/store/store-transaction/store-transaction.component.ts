import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-transaction',
  templateUrl: './store-transaction.component.html',
  styleUrls: ['./store-transaction.component.css']
})
export class StoreTransactionComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
