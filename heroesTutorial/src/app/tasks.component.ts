import { Component, OnInit} from '@angular/core';

import { Task } from './task';
import { TaskDetailComponent } from './task-detail.component';
import { TaskService } from './task.service';
import { NewTaskComponent } from './new-task.component';

@Component({
  selector: 'my-tasks',
  template: `
        <h2>All tasks:</h2>
        <ul class='tasks'>
            <li *ngFor='let task of tasks'
            (click)='onSelect(task)'
            [class.selected]='task === selectedTask'>
            <span class='task-id'>{{task.id}}</span>
            {{task.name}}
            </li>
        </ul>
        <my-task-details [task]='selectedTask'></my-task-details>

        <button class='add-task'
                (click)="showForm(newTask)">
                Add a new task
                <my-new-task [task]='newTask'></my-new-task>
        </button>

  `,
  styleUrls: [ './tasks.component.css' ]
})
export class TasksComponent implements OnInit {
    constructor(private _taskService: TaskService) {}

    ngOnInit() {
        this.getTasks();
    }
    getTasks() {
        this._taskService.getTasks().then(tasks => this.tasks = tasks);
    }
    selectedTask: Task;
    tasks: Task[];
    newTask: Task;

    onSelect(task: Task): void {
      this.selectedTask = task;
    }
    showForm(newTask: Task): void {
        this.newTask = newTask;
    }

    // addTask(newTask: Task) {
        // if(newTask) {
            // this.tasks.push(newTask);
        // }
    // }
 }
