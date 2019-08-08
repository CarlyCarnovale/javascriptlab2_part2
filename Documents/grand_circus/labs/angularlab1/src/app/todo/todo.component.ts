import { Component, OnInit } from "@angular/core";
import { Todo } from "../interface/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [
    { task: "wash dishes", completed: false },
    { task: "wash dog", completed: false },
    { task: "vacuum", completed: false },
    { task: "laundry", completed: true },
    { task: "wash windows", completed: false },
    { task: "water garden", completed: false }
  ];

  constructor() {}

  ngOnInit() {}
}
