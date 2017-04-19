import {Component, Input} from '@angular/core';
import { Task } from './task';

@Component ({
    selector: 'my-task-details',
    template: `
    <div *ngIf="task">
        <h2>{{task.name}} details</h2>
        <div><label>id: </label>{{task.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="task.name" placeholder="name">
            <label>text: </label>
            <input [(ngModel)]="task.text" placeholder="text">
        </div>
     </div>
    `
})

export class TaskDetailComponent {
    @Input()
    task: Task;
}
