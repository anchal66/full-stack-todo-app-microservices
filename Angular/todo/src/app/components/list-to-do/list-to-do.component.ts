import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/model/todo.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit {
  todos:Todo[];
  
  constructor(private dataService: DataService, private router:Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }
  refreshTodos(){
    this.dataService.retriveAllTodos('Avinash').subscribe(res=>{
      console.log(res)
      this.todos = res;
    },
    err=>console.log("error ", err))
  }
  onDelete(id){
    this.dataService.deletTodo(id,'Avinash').subscribe(res=>{
      console.log(res);
      this.refreshTodos();
    })
  }
  onUpdate(id){
    this.router.navigate(['todos', id])
  }

}
