import { Component } from '@angular/core';

export interface Todo {
  title: string;
  completed: boolean;
}
export interface AppData {
  todos: Array<Todo>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data: AppData = {
    todos: [
      {
        title: 'Eat food',
        completed: true
      },
      {
        title: 'Complete project',
        completed: false
      }
    ]
  }; 


  addTodo(todo: any){
    this.data.todos.push({
      title: todo,
      completed: false
    }); 
  }
}