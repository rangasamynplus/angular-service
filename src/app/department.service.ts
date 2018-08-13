import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

   getDepartments () {
      return [
        { "id" : 1, "name" : "Rangasamy", "age"  : 86, "email" : "rangasamy@gmail.com", "department" : "IT"},
        { "id" : 2, "name" : "Ranga", "age"  : 87 , "email" : "ranga@gmail.com",  "department" : "Accounts"},
        { "id" : 3, "name" : "samy", "age"  : 88 , "email" : "samy@gmail.com" , "department" : "IT"}
      ];
   }
}
