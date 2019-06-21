import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-taskes',
  templateUrl: './taskes.component.html',
  styleUrls: ['./taskes.component.css']
})
export class TaskesComponent implements OnInit {
Tasks:any;
  constructor(private _service : ServiceService) { }

  ngOnInit() {
    this._service.GetAllTasks().subscribe(res=>this.Tasks=res.json())
  }

}
