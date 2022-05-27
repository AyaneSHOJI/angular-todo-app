import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addTodo(todo: any){
    this.addTodoChange.next(todo);
  }

  @Output() addTodoChange = new EventEmitter();
}
