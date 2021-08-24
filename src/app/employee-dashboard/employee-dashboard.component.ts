import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { EmployeeModel } from './employee-dashboard-model';
import { ApiService }  from '../shared/api.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue !:FormGroup;
  employeeModelObj: EmployeeModel = new EmployeeModel;
  employeeData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      salary:['']
    })
    this.getEmployeeDetails()
  }
  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate = false;
  }

  postEmployeeDetails(){
    this.employeeModelObj.firstName =this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;
    console.log("object", this.employeeModelObj)

    this.api.postEmployee(this.employeeModelObj)
      .subscribe((res: any) => {
        console.log(res);
        alert("Employee Added Successfully")
        this.formValue.reset();
        let ref = document.getElementById('cancle');
        ref?.click();
        this.getEmployeeDetails()
      },
      (err: any) =>{
        alert("something wrong")
      })
  }
  getEmployeeDetails(){
    this.api.getEmployee()
      .subscribe((res: any) => {
        this.employeeData = res;
      })
  }
  deleteEmployeeDetails(emp:any) {
    this.api.deleteEmployee(emp.id)
      .subscribe((res: any) => {
        alert("selete  successfully")
        this.getEmployeeDetails()
      })
  }

  onUpdateEmployee(emp:any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.employeeModelObj.id = emp.id;
    this.formValue.controls['firstName'].setValue(emp.firstName);
    this.formValue.controls['lastName'].setValue(emp.lastName);
    this.formValue.controls['email'].setValue(emp.email);
    this.formValue.controls['mobile'].setValue(emp.mobile);
    this.formValue.controls['salary'].setValue(emp.salary);
  }

  updateEmployeeDetails(){
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;
    
    this.api.updateEmployee(this.employeeModelObj, this.employeeModelObj.id)
      .subscribe((res: any) => {
        console.log(res);
        alert("Employee Update Successfully")
        this.formValue.reset();
        let ref = document.getElementById('cancle');
        ref?.click();
        this.getEmployeeDetails()
      },
        (err: any) => {
          alert("something wrong")
        })

  }

}
