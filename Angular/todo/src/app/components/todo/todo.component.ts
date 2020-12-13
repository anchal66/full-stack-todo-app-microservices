import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/model/todo.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id;
    this.route.params.subscribe(param=>id = param['id']);
    this.dataService.retriveTodo('Avinash', id).subscribe(res=>{
      console.log(res);
      this.todo = res
    });
  }

  saveTodo(){

  }
}
