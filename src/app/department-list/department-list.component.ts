import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments = [
    { "id" : 1, "name" : "Rangasamy", "age"  : 86, "email" : "rangasamy@gmail.com", "department" : "IT"},
    { "id" : 2, "name" : "Ranga", "age"  : 87 , "email" : "ranga@gmail.com",  "department" : "Accounts"},
    { "id" : 3, "name" : "samy", "age"  : 88 , "email" : "samy@gmail.com" , "department" : "IT"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
