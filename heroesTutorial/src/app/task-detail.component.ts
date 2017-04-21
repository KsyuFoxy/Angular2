import {Component, Input} from '@angular/core';
import { Task } from './task';

@Component ({
    selector: 'my-task-details',
    template: `
     <div *ngIf="task" [class.saved]="isSaved" class='task-detail'>
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
     </div>

    `,
    styleUrls: [ './tasks.component.css' ]
})

export class TaskDetailComponent {
    @Input()
    task: Task;
    isSaved: boolean = false;

constructor() {
    console.log(this.isSaved)
}

    onSave(): void {
        this.isSaved = true;
        console.log(this.task);
        console.log(this.isSaved);
  }


}