import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';
import { PRIMARY_OUTLET, Router, UrlTree } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-empolyee',
  templateUrl: './empolyee.component.html',
  styleUrls: ['./empolyee.component.css']
})
export class EmpolyeeComponent implements OnInit {
  urlTree: UrlTree;
  id : any;

  constructor( private _service : ServiceService, private _router: Router) { }

  ngOnInit() {

this.urlTree = this._router.parseUrl(this._router.url);
    this.id = this.urlTree.root.children[PRIMARY_OUTLET].segments[2].path;
    console.log("id", this.id)

  }

}
