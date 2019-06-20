import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  Departments: any;
  constructor(private _service : ServiceService) { }

  ngOnInit() {
    this._service.GetAllDepartments().subscribe(res =>this.Departments=res.json()); 
  }

}
