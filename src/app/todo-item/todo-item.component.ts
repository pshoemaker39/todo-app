// randDescription: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// randDate: https://stackoverflow.com/questions/9035627/elegant-method-to-generate-array-of-random-dates-within-two-dates

import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"]
})
export class TodoItemComponent implements OnInit {
  constructor() {}

  randDescription = length => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  randDate = () => {
    let start = new Date(2012, 0, 1);
    let end = new Date();
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  };

  randUrgency() {
    const states = ["Urgent", "Days", "Week"];
    let rand = Math.floor(Math.random() * 3);
    return states[rand];
  }

  createSampleTodo() {
    let newTodo: any = {};
    newTodo.description = this.randDescription(25);
    newTodo.date = this.randDate();
    newTodo.state = this.randUrgency();
    return newTodo;
  }

  createRealTodo(desc: string, date: Date) {
    let newTodo: any = {};
    newTodo.update = false;
    newTodo.description = desc;
    newTodo.date = date;
    return newTodo;
  }

  ngOnInit() {}
}
