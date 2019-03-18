import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';



export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetdate: Date
  ) {

    }
 }

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message: string
  // todos = [
  //   //  new Todo(1, 'Learn to Dance', false, new Date()),
  //   //  new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   //  new Todo(3, 'Visit India', false, new Date())
  //   { id: 1, description: "Become an Expert at Angular" },
  //   { id: 2, description: 'learn spring boot' },
  //   { id: 3, description: 'Visit India' }
  // ]
  constructor(
    private todoservice:TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
     this.todoservice.retrieveAllTodos('username').subscribe(
      response => {
        console.log(response)
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`)
    this.todoservice.deleteTodo('username', id).subscribe(
      response =>{
         console.log(response)
         this.message = `Delete of Todo ${id} Successfull`
      }
    )
  }

  updateTodo(id){
    console.log(`update ${id}`)
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos',-1])
  }

}
