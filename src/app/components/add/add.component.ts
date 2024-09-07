import {Component, Output, EventEmitter} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @Output() todo = new EventEmitter<string>();

  addTodo(value: string) {
    value = value.trim();
    if (value !== '') {
      this.todo.emit(value);
    }
  }
}
