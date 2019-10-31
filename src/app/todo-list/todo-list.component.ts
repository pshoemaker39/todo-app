import { Component, OnInit } from "@angular/core";
import { TodoServiceService } from "../todo-service.service";
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"]
})
export class TodoListComponent implements OnInit {
  todos: TodoItemComponent[];
  newDate: Date;

  constructor(private _todoService: TodoServiceService) {
    this.todos = [];
  }

  ngOnInit() {
    this.todos = this._todoService.getSampleTodos(10);
    console.log("init");
  }
}
