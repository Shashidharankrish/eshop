import { Component } from '@angular/core';

@Component({
  selector: 'admin-dashboard-dashboard',
  templateUrl: './dashboard.component.html',
  
})
export class DashboardComponent {

  ngOnInit = void(
    console.log("dashboard loaded")
  )
}
