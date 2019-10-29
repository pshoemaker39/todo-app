import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { NewTodoItemComponent } from "./new-todo-item/new-todo-item.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TodoItemComponent,
    TodoListComponent,
    NewTodoItemComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, AngularFirestore],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
