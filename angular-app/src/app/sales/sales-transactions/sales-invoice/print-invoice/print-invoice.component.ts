import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { SalesTransactionsService } from '../../sales-transactions.service';

@Component({
  selector: 'app-print-invoice',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './print-invoice.component.html',
  styleUrls: ['./print-invoice.component.css']
})
export class PrintInvoiceComponent implements OnInit {
  @Input() invoiceDetails: any[];
  @Input() INM_CODE: number;
  @Input() name: string;
  isDataLoaded: boolean = false;
  dummyarray: any[] = [];
  constructor(
    private service: SalesTransactionsService
  ) { }

  ngOnInit(): void {
    this.service.getInvoiceDetails(this.INM_CODE)

      .subscribe(
        data => {

          this.invoiceDetails = data;
          console.log(this.invoiceDetails, this.invoiceDetails.length, this.name)
          this.isDataLoaded = true;

          // console.log(this.dummyarray.length)
        }
      )

  }


}
