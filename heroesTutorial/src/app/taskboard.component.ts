import { Component, OnInit} from '@angular/core';

import { Task } from './task';
import { TaskDetailComponent } from './task-detail.component';
import { TaskService } from './task.service';

@Component({
  selector: 'my-taskboard',
  template: `
        <h3>All tasks:</h3>
        <ul>
            <li *ngFor='let task of tasks'
            (click)='onSelect(task)'
            [class.selected]='task === selectedTask'>
            <span>{{task.id}}</span>
            {{task.name}}
            </li>
        </ul>
        <my-task-details [task]='selectedTask'></my-task-details>
  `,
})
export class TaskboardComponent implements OnInit {
    constructor(private _taskService: TaskService) {}

    ngOnInit() {
        this.getTasks();
    }
    getTasks() {
        this._taskService.getTasks().then(tasks => this.tasks = tasks);
    }
    selectedTask: Task;
    tasks: Task[];
    
    onSelect(task: Task): void {
      this.selectedTask = task;
    }
 }
