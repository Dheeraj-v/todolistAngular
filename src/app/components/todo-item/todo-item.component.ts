import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todotasks } from 'src/app/models/todotasks';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() tasks:Todotasks[] = [];
  @Output() completedEmitEvent = new EventEmitter();
  @Output() deletedEmitEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  handleCompleted(val:Todotasks){
    this.completedEmitEvent.emit(val);
  }
  handleDeleted(val:Todotasks){
    this.deletedEmitEvent.emit(val);
  }
}
