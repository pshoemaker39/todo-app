import { Injectable } from "@angular/core";
// import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { TodoItemComponent } from "./todo-item/todo-item.component";

@Injectable({
  providedIn: "root"
})
export class TodoServiceService {
  items: Observable<any[]>;
  todoItemComponent = new TodoItemComponent();
  todos: TodoItemComponent[];
  constructor() {
    this.todos = [];
  }

  getSampleTodos(num: number) {
    for (let i = 0; i < num; i++) {
      this.todos.push(this.todoItemComponent.createSampleTodo());
    }
    return this.todos;
  }
  addNewTodo(desc: string, date: Date) {
    this.todos.push(this.todoItemComponent.createRealTodo(desc, date));
  }
}
