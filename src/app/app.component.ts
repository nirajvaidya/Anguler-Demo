import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-crud';
  // user = "amit";
  user = [
    {
      name: "amit",
      age: 12
    },
    {
      name: "raja",
      age: 16
    }
  ]
  name=""
  age=""
  handlePass(val:any){
    console.log(val)
    this.name=val.name
    this.age = val.age

  }
}

