import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: String;
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('username');
  }

}
