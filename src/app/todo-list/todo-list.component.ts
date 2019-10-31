import { Component, OnInit } from "@angular/core";
import { TodoServiceService } from "../todo-service.service";
import { TodoItemComponent } from "../todo-item/todo-item.component";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  todos: TodoItemComponent[];

  constructor(private _todoService: TodoServiceService) {
    this.todos = [];
  }

  ngOnInit() {
    this.todos = this._todoService.getSampleTodos(10);
    console.log("init");
  }
}
