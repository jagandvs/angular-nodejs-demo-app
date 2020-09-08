import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-store',
  templateUrl: './nav-store.component.html',
  styleUrls: ['./nav-store.component.css']
})
export class NavStoreComponent implements OnInit {
  user: string;
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('username')
  }

}
