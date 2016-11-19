import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
  constructor(private http: Http){
    console.log('Task service initialized');
  }

  getTasks(){
    return this.http.get('http://localhost:3000/api/tasks')
            .map(response => response.json());
  }//getTasks

  addTask(newTask){
    var headers = new Headers();
    headers.append('content-Type', 'application/json');

    return this.http.post(
              'http://localhost:3000/api/task',
              JSON.stringify(newTask),
              {headers: headers})
              .map(response => response.json());
  }//addTasks

  deleteTask(id){
    return this.http.delete(
      'http://localhost:3000/api/task/'+id
    )
    .map(response => response.json());
  }//deleteTasks

  updateTask(task){
    var headers = new Headers();
    headers.append('content-Type', 'application/json');

    return this.http.put(
      'http://localhost:3000/api/task/'+task._id,
      JSON.stringify(task),
      {headers: headers})
      .map(response => response.json());

  }//updateTask

  updateTaskStatus(task){
    var headers = new Headers();
    headers.append('content-Type', 'application/json');

    return this.http.put(
      'http://localhost:3000/api/task/'+task._id,
      JSON.stringify(task),
      {headers: headers})
      .map(response => response.json());

  }//updateTask

}
