import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Task } from './task';
// import { TASKS } from './mock-tasks';

@Component ({
    selector: 'my-task-details',
    template: `
     <div *ngIf="task && isSaved && isDeleted" class='task-detail'>
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
            <button (click)="onSave()">Save</button>
            <button (click)="delete()" class='delete-button'>Delete Task</button>
     </div>

    `,
    styleUrls: [ './tasks.component.css' ]
})

export class TaskDetailComponent {
    @Input() task: Task;
    @Output() taskChange = new EventEmitter();
    @Input() isSaved = false;
    @Output() isSavedChange = new EventEmitter();

    @Input() tasks: Task[];
    @Input() isDeleted = false;
    @Output() isDeletedChange = new EventEmitter();

    onSave(): void{
        this.isSaved = false;
        this.isSavedChange.emit(false);
        console.log('task', this.task);
    }
    delete() {
        this.isDeleted = false;
        this.isDeletedChange.emit(false);
        var index = this.tasks.indexOf(this.task);
        this.tasks.splice(index, 1);
    }

}
