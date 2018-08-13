import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employess-list',
  templateUrl: './employess-list.component.html',
  styleUrls: ['./employess-list.component.css']
})
export class EmployessListComponent implements OnInit {

  public employees = [
    { "id" : 1, "name" : "Rangasamy", "age"  : 86, "email" : "rangasamy@gmail.com"},
    { "id" : 2, "name" : "Ranga", "age"  : 87 , "email" : "ranga@gmail.com"},
    { "id" : 3, "name" : "samy", "age"  : 88 , "email" : "samy@gmail.com"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
