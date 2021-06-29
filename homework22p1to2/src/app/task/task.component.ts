import { Task } from './../models/task';
import { ToDoComponent } from './../todo/todo.component';
import { TodoListComponent } from './../todo-list/todo-list.component';
import { Input, ViewChildren } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { QueryList } from '@angular/core';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @ViewChildren(TodoListComponent)  todoList: QueryList<TodoListComponent>;

  tasks: Task[];

  @Input()
  id:number;
  name:string;
  des: string;


  isViews:boolean;

  constructor() {
    this.tasks = [];
  }

  ngOnInit() {
    this.isViews = false;
  }

  selectedTask(todoComponent: TodoListComponent) {
   // alert(`Task ${todoComponent.task.name} selected`);
    this.todoList.forEach(p => {p.isSelected=false});
    todoComponent.isSelected = true;

    this.id = todoComponent.task.id;
    this.name = todoComponent.task.name;
    this.des = todoComponent.task.description;
    this.isViews = true;
  }

  deleteTask(id:number){
    this.tasks.splice(id-1,1);
    this.isViews = false;
    this.todoList.forEach(p => {p.isSelected=false});

    this.name='';
    this.des='';
  }

  addTask(){
    this.tasks.push(
      {
        id: this.tasks.length+1,
        name: this.name,
        description: this.des
      }
    );

    this.name='';
    this.des='';
}

close(){
  this.isViews = false;
}


}
