import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Task, NewTask } from './task';
import { TaskService } from './task.service';
import { TASKS } from './mock-tasks';
import { TasksComponent } from './tasks.component';

@Component ({
    selector: 'my-new-task',
    template: `
        <div *ngIf='newTask && isFormDisplayed.display' class='task-detail'>
                <h2>New task details</h2>
                <div>
                    <label>ID: </label>
                    <input [(ngModel)]="newTask.id">
                </div>
                <div>
                    <label>Name: </label>
                    <input [(ngModel)]="newTask.name">
                </div>
                <div class='placeholder-wrapper'>
                    <label>Text: </label>
                    <textarea [(ngModel)]="newTask.text" rows='4'></textarea>
                </div>
                <button (click)="addTask(newTask)">Save</button>
                </div>
    `,
    styleUrls: [ './tasks.component.css' ]
})

export class NewTaskComponent {
    @Input() newTask: NewTask;
    @Output() newTaskChange = new EventEmitter();
    @Input() isFormDisplayed;
    // @Output() isFormDisplayedChange = new EventEmitter();
    tasks: Task[] = TASKS;

    constructor() {

    }
    addTask(newTask: NewTask): void {
        // this will change child isFormDisplayed
        this.isFormDisplayed.display = false;
        // this will change parent isFormDisplayed
        // this.isFormDisplayedChange.emit(false);
        var addTask = {
            id: newTask.id,
            name: newTask.name,
            text: newTask.text
        };
        this.tasks.push(addTask);
        this.newTaskChange.emit({id: 0, name: '', text: ''});
    }
}
