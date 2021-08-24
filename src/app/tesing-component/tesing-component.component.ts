import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tesing-component',
  templateUrl: './tesing-component.component.html',
  styleUrls: ['./tesing-component.component.css']
})
export class TesingComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inputValue = ""
  getVal(val: any){
    // return alert(data)
    console.warn(val)
    this.inputValue=val
  }
  name="kala"
  disableValue = true
  open(){
    this.disableValue=false
  }
  show="yes"
  color="salmon"
  data=[
      {
          name: "kala",
          age: "32",
          size: 24
      },
      {
          name: "kala2",
          age: "34",
          size: 2
      },
  ]
  err=true;
  changeColor(){
    this.err=!this.err
  }
}

