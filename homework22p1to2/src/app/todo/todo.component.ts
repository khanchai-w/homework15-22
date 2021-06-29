import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class ToDoComponent{
  @Input()
  task: string;

  constructor(){};
  tasks = ['Coffee','Breakfast'];

  add(task: string){
    this.tasks.push(task);
    this.task = '';
  }

  del(task:string){
    this.tasks.splice(this.tasks.indexOf(task),1);
    console.log(this.tasks);
  }
}
