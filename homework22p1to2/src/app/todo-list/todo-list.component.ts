import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input()
  task: Task;
  isSelected: boolean;

  @Output()
  OnSelected: EventEmitter<TodoListComponent> = new EventEmitter();
  OnClick: EventEmitter<TodoListComponent> = new EventEmitter();
  constructor() { }



  ngOnInit(): void {
  }

  select() {
    this.OnSelected.emit(this);
  }

}
