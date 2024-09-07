import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodosComponent} from "./components/todos/todos.component";
import {AddComponent} from "./components/add/add.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodosComponent, AddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'CheckMate';
  titleDescription: string = 'An Angular18 Todo App!';
}
