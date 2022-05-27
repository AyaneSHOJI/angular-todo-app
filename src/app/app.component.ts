import { Component } from '@angular/core';

// In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.
export interface Todo {
  title: string;
  completed: boolean;
}
export interface AppData {
  todos: Array<Todo>;
}

//Do not change this location
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //Property
  data: AppData = {
    todos: [
      {
        title: 'Update CV',
        completed: true
      },
      {
        title: 'Finish 2nd Angular project',
        completed: false
      }
    ]
  }; 

  //Method
  addTodo(todoTitle: string){
    this.data.todos.push({
      title: todoTitle,
      completed: false
    }); 
  }
}