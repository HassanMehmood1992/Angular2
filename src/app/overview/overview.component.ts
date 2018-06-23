import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  sortKey;   //set the sortKey to the param passed
  reverse;
  constructor() { }

  ngOnInit() {
  }
  sort(keyname)
  {
    this.sortKey = keyname;   //set the sortKey to the param passed
    this.reverse = !this.reverse; //if true make it false and vice versa
  }
}
