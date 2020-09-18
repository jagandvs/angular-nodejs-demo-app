import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-masters',
  templateUrl: './nav-masters.component.html',
  styleUrls: ['./nav-masters.component.css']
})
export class NavMastersComponent implements OnInit {
  user: string;
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('username');
  }

}
