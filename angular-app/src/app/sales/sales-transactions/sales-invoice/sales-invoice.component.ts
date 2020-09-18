import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesTransactionsService } from '../sales-transactions.service';

@Component({
  selector: 'app-sales-invoice',
  templateUrl: './sales-invoice.component.html',
  styleUrls: ['./sales-invoice.component.css']
})
export class SalesInvoiceComponent implements OnInit {
  invoiceDetails: any[];
  INM_CODE: number;
  pg: number;
  constructor(
    private route: ActivatedRoute,
    private service: SalesTransactionsService
  ) { }

  ngOnInit() {
    // window.print()
    this.route.queryParams.subscribe(
      params => {

        this.INM_CODE = params['bm_code'];
        this.pg = params['pg'];

      }
    );
  }
}