import { Component, Input, OnInit } from '@angular/core';
import { Todotasks } from 'src/app/models/todotasks';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todotasks:Todotasks[] = [{
    taskName: 'discuss with teamates',
    isCompleted: false
  }];
  allTaskCompleted:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  isAlltaskCompleted (){
    if(this.todotasks.length === 0){
      this.allTaskCompleted =  true;
    }
    else {
      const completedTask = this.todotasks.filter(eachTask=>eachTask.isCompleted);
      this.allTaskCompleted = completedTask.length === this.todotasks.length
    }
    
  }
  addTaskItem(val:Todotasks){
    this.todotasks.push(val);
    this.isAlltaskCompleted();

  }
  
  findIndex(val:Todotasks){
    return this.todotasks.findIndex(c=> c.taskName === val.taskName);

  }
  handleCompleted(val:Todotasks){
    const index:number = this.findIndex(val);
    this.todotasks[index].isCompleted = true;
    this.isAlltaskCompleted();
  }
  handleDeleted(val:Todotasks){
    const index:number = this.findIndex(val);
    this.todotasks.splice(index, 1);
    this.isAlltaskCompleted();

  }
}
