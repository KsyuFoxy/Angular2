import { Component, OnInit, Input} from '@angular/core';

import { Task, NewTask } from './task';
import { TaskDetailComponent } from './task-detail.component';
import { TaskService, NewTaskService } from './task.service';
import { NewTaskComponent } from './new-task.component';
import { SearchComponent } from './search.component';

import { PipesComponent, FilterPipe } from './pipes.component';

// import { TaskSearchComponent } from './task-search.component';
//put in HTML <task-search></task-search>

@Component({
  selector: 'my-tasks',
  template: `
        <h2>All tasks:</h2>
        <search [(searchInput)]='searchInput' [(tasks)]='tasks' [(showNotFilteredTasks)]='showNotFilteredTasks'></search>
        <ul class='tasks' *ngIf='showNotFilteredTasks'>
            <li *ngFor='let task of tasks'
            (click)='onSelect(task)'
            [class.selected]='task === selectedTask'>
            <span class='task-id'>{{task.id}}</span>
            {{task.name}}
            </li>
        </ul>
        <my-task-details [(task)]='selectedTask' [(tasks)]='tasks' [(isSaved)]='isSaved' [(isDeleted)]='isDeleted'></my-task-details>

        <button class='add-task'
                *ngIf="!selectedTask || !isSaved && isDeleted || isSaved && !isDeleted"
                (click)="showForm(newTask)"
                [disabled]="isFormDisplayed">
                Add a new task
        </button>
        <my-new-task [(isFormDisplayed)]='isFormDisplayed' [(newTask)]='emptyTask'></my-new-task>

        <pipes [(tasks)]='tasks' [(task)]='task'></pipes>

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
    tasks: Task[];
    isSaved = false;
    isDeleted = false;

    addNewTask: NewTask;
    newTask: NewTask[];
    emptyTask = {id: 0, name: '', text: ''};
    isFormDisplayed = false;

    searchInput: string;
    showNotFilteredTasks = true;

    onSelect(task: Task): void {
      this.isSaved = true;
      this.isDeleted = true;
      this.selectedTask = task;
    }

    showForm(newTask: NewTask): void {
        this.isFormDisplayed = !this.isFormDisplayed;
        this.addNewTask = newTask;
    }

 }
