import { Component, OnInit} from '@angular/core';

import { Task, NewTask } from './task';
import { TaskDetailComponent } from './task-detail.component';
import { TaskService, NewTaskService } from './task.service';
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
                (click)="showForm(newTask)"
                [disabled]="addNewTask">
                Add a new task
        </button>
        <my-new-task [newTask]='addNewTask'></my-new-task>

  `,
  styleUrls: [ './tasks.component.css' ]
})
export class TasksComponent implements OnInit {
    constructor(
        private _taskService: TaskService,
        private newTaskService: NewTaskService,
        // private _newTaskService: NewTaskService
    ) {}

    ngOnInit(): void {
        this.getTasks();
        this.getNewTask();
    }
    getTasks() {
        this._taskService.getTasks().then(tasks => this.tasks = tasks);
    }

    getNewTask(): void {
        this.newTask = this.newTaskService.getNewTask();
    }

    selectedTask: Task;
    addNewTask: NewTask;
    tasks: Task[];
    newTask: NewTask[];

    onSelect(task: Task): void {
      this.selectedTask = task;
      console.log('selectedTask', this.selectedTask)
    }

    showForm(newTask: NewTask): void {
        this.addNewTask = newTask;
        console.log('newTask', this.addNewTask)
    }


 }
