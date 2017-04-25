import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Task } from './task';

@Component ({
    selector: 'my-task-details',
    template: `
     <div *ngIf="task && isSaved" class='task-detail'>
            <h2>Task details</h2>
            <div>
                <label>ID: </label>{{task.id}}
            </div>
            <div>
                <label>Name: </label>
                <input [(ngModel)]="task.name" placeholder="task.name">
            </div>
            <div class='placeholder-wrapper'>
                <label>Text: </label>
                <textarea [(ngModel)]="task.text" placeholder="text" rows='4'></textarea>
            </div>
            <button (click)="onSave(changeTast)">Save</button>
     </div>

    `,
    styleUrls: [ './tasks.component.css' ]
})

export class TaskDetailComponent {
    @Input() task: Task;
    @Output() taskChange = new EventEmitter();
    @Input() isSaved = false;
    @Output() isSavedChange = new EventEmitter();

    onSave(changeTast: Task): void{
        this.isSaved = false;
        this.isSavedChange.emit(false);
        console.log('task', this.task);
    }

}
