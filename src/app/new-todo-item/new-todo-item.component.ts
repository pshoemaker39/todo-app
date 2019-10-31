import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { TodoServiceService } from "../todo-service.service";

@Component({
  selector: "app-new-todo-item",
  templateUrl: "./new-todo-item.component.html",
  styleUrls: ["./new-todo-item.component.scss"]
})
export class NewTodoItemComponent implements OnInit {
  constructor(private _todoService: TodoServiceService) {}
  onSubmit(form: NgForm) {
    this._todoService.addNewTodo(form.value.desc, form.value.date);
  }
  ngOnInit() {}
}
