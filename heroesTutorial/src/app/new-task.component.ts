import {Component, Input} from '@angular/core';
import { Task, NewTask } from './task';
import { TaskService } from './task.service';
import { TASKS } from './mock-tasks';
import { TasksComponent } from './tasks.component';

@Component ({
    selector: 'my-new-task',
    template: `
        <div *ngIf='newTask && !saved' class='task-detail'>
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
    @Input()
    newTask: NewTask;
    tasks: Task[] = TASKS;
    public saved = false;

    constructor() {

    }
    addTask(newTask: NewTask): void {
        // if(newTask) {
        this.tasks.push(newTask);
        // }
        console.log('save tasks', this.tasks)
        console.log('save new-task', this.newTask)
        this.saved = true;
    }
    //
    // // addTask(newTask: Task) {
    //     // if(newTask) {
    //         // this.tasks.push(newTask);
    //     // }
    // // }
}
