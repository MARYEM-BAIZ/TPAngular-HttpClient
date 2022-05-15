import { Component, Input, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styles: []
})
export class EmployeeCreateComponent implements OnInit {

  @Input() employeeDetails = { name: '', email: '', phone: 0 }

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) {}

  ngOnInit(): void {
  }

  addEmployee() {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/employee-list'])
    })
  }

}
