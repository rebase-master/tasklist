import { Component } from '@angular/core';
import {TaskService} from "../services/task.service";
import {Task} from "../../Task";

@Component({
  selector: 'tasks',
  templateUrl: 'tasks.component.html'
})

export class TasksComponent {

  tasks: Task[];
  title: string;

  constructor(private taskService: TaskService){
    this.taskService.getTasks()
        .subscribe(tasks => {
          this.tasks = tasks;
        })
  }

  //add task
  addTask(event){
    event.preventDefault();
    var newTask = {
      title: this.title,
      isDone: false
    }

    //call taskService to add new task via POST request
    this.taskService.addTask(newTask)
        .subscribe(task =>{
          this.tasks.push(task);
          this.title = '';
        })
  }//addTask

  //Delete a Task
  deleteTask(id){
    var tasks = this.tasks;
    //Call taskService to delete a task via DELETE request
    this.taskService.deleteTask(id)
    .subscribe(data => {
      console.log(data);
      if(data.n == 1){
        for(var i=0; i < tasks.length; i++){
          if(tasks[i]._id == id){
            tasks.splice(i,1);
          }
        }
      }
    })
  }//deleteTask

  //Update a task
  updateTaskStatus(task){
    var _task = {
        _id: task._id,
        isDone: !task.isDone
    }

    this.taskService.updateTaskStatus(_task)
        .subscribe(data => {
          task.isDone = !task.isDone;
        });
  }

  //Update a task
  updateTask(task){
    var _task = {
        _id: task._id,
        title: task.title,
    }

    this.taskService.updateTask(_task)
        .subscribe(data => {

        });
  }

}
