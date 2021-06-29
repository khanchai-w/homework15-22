import { TodoListComponent } from './todo-list/todo-list.component';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('todoList',{static:true}) todoList: TaskComponent

  title = 'homework22p1to2';

  ngOnInit(): void {
    this.todoList.tasks = [
      {
      id: 1,
      name: 'Coffee',
      description: 'Originally, coffee farming was done in the shade of trees that provided a habitat for many animals and insects.[68] Remnant forest trees were used for this purpose, but many species have been planted as well. These include leguminous trees of the genera Acacia, Albizia, Cassia, Erythrina, Gliricidia, Inga, and Leucaena, as well as the nitrogen-fixing non-legume sheoaks of the genus Casuarina, and the silky oak Grevillea robusta'
      },
      {
        id: 2,
        name: 'Breakfast',
        description: 'Breakfast is the first meal of the day eaten after waking from the night s sleep, usually in the morning.[1] The word in English refers to breaking the fasting period of the previous night.[2] There is a strong likelihood for one or more typical, or traditional, breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast.'
        }
      ];
    }
}
