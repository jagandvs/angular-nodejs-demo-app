import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-sales',
  templateUrl: './nav-sales.component.html',
  styleUrls: ['./nav-sales.component.css']
})
export class NavSalesComponent implements OnInit {
  user: string
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('username')
  }

}
