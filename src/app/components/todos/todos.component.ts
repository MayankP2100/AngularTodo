import {Component} from '@angular/core';
import {AddComponent} from "../add/add.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [AddComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos: string[] = []

  addTodo($event: string) {
    this.todos.push($event);
  }

  removeTodo(index: number) {
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
