import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-passes-data',
  templateUrl: './passes-data.component.html',
  styleUrls: ['./passes-data.component.css']
})
export class PassesDataComponent implements OnInit {

  @Input() hero:any;
  @Output() handlePass:EventEmitter<any> = new EventEmitter;

  constructor() { }
  ngOnInit(): void {
    // console.log(hero)
    // this.handlePass.emit("amit")
  }
  showData(){
    let userData={name:"anil", age:12}
    this.handlePass.emit(userData)
  }

}
