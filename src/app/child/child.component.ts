import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('ParentData') public parentName;
  @Output() public outputevent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.outputevent.emit("Hello,This is message from child")

  }

}
