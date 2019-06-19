import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-taskes',
  templateUrl: './taskes.component.html',
  styleUrls: ['./taskes.component.css']
})
export class TaskesComponent implements OnInit {

  constructor(private _service : ServiceService) { }

  ngOnInit() {
  }

}
