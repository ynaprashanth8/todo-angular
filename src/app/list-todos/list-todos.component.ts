import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

// export class Todo {
//   constructor(
//     public id: number,
//     public description: string,
//     public done: boolean,
//     public targetdate: Date
//   ) {

//    }
// }
export class ListTodosComponent implements OnInit {

  todos = [
    //  new Todo(1, 'Learn to Dance', false, new Date()),
    //  new Todo(2, 'Become an Expert at Angular', false, new Date()),
    //  new Todo(3, 'Visit India', false, new Date())
    { id: 1, description: "Become an Expert at Angular" },
    { id: 2, description: 'learn spring boot' },
    { id: 3, description: 'Visit India' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
