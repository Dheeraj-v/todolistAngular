import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output()addedTask =new EventEmitter();

  newtask:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  addNewTask():void{
    console.log('newtask', this.newtask);

    this.addedTask.emit({taskName:this.newtask, isCompleted: false});

    this.newtask = ''
  }

}
