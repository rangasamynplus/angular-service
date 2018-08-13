import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; 
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployessListComponent } from './employess-list/employess-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    EmployessListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([  
      { path: 'departments', component: DepartmentListComponent },  
      { path: 'employees', component: EmployessListComponent },
      { path: 'employees:id', component: EmployessListComponent },
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
