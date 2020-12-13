import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:8080/api/users/';

  constructor(private http: HttpClient) { }

  retriveAllTodos(username){
    return this.http.get<Todo[]>(`${this.url}/${username}/todos`);
  }

  retriveTodo(username, id){
    return this.http.get<Todo>(`${this.url}/${username}/todos/${id}`);
  }

  deletTodo(id, username){
    return this.http.delete(`${this.url}/${username}/todos/${id}`);
  }
}
