import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styles: [
  ]
})
export class EmployeeEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];

  employeeData: any = {};

  constructor(public restApi: RestApiService, public actRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.restApi.getEmployee(this.id).subscribe((data: {}) => {
      this.employeeData = data;
    })
  }

  updateEmployee() {
    if(window.confirm('Are you sure you want to make an update?')) {
      this.restApi.updateEmployee(this.id, this.employeeData).subscribe(data => {
        this.router.navigate(['/employee-list'])
      })
    }
  }

}
