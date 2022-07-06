import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) { }
  logout() {
    sessionStorage.removeItem('myAppToken');
    this.router.navigateByUrl('/login');
    this.router.navigateByUrl('/login');
  }
  ngOnInit(): void {
  }

}
