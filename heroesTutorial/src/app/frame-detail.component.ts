import {Component, Input} from '@angular/core';
import { Frame } from './frame';

@Component ({
    selector: 'my-frame-details',
    template: `
    <div *ngIf="frame">
        <h2>{{frame.name}} details</h2>
        <div><label>id: </label>{{frame.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="frame.name" placeholder="name">
        </div>
     </div>
    `
})

export class FrameDetailComponent {
    @Input()
    frame: Frame;
}
