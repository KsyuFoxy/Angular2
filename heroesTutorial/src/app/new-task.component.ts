import {Component, Input} from '@angular/core';
import { Task } from './task';

@Component ({
    selector: 'my-new-task',
    template: `

        <div *ngIf='newTask' class='task-detail'>
            <h2>New task details</h2>
            <div>
                <label>ID: </label>
                <input [(ngModel)]="task.id" placeholder="task.id">
            </div>
            <div>
                <label>Name: </label>
                <input [(ngModel)]="task.name" placeholder="task.name">
            </div>
            <div class='placeholder-wrapper'>
                <label>Text: </label>
                <textarea [(ngModel)]="task.text" placeholder="text" rows='4'></textarea>
            </div>
            <button *ngIf='newTaskFilled' (click)="onSave()">Save</button>
        </div>
    `,
    styleUrls: [ './tasks.component.css' ]
})

export class NewTaskComponent {
    @Input()
    task: Task;
    newTaskFilled: Task;

}
