import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Person } from './person';

@Component ({
    selector: 'my-person-details',
    template: `
    <div *ngIf="person">
        <h2>{{person.name}} info</h2>
        <div><label>id: </label>{{person.id}}</div>
        <div><label>name: </label>{{person.name}}</div>
        <div>
            <label>availability: </label>
            <input name="availability" type="radio" [(ngModel)]="person.availability" [value]="1"
                   [checked]="person.availability == 1" />Yes
            <input name="availability" type="radio" [(ngModel)]="person.availability" [value]="2"
                   [checked]="person.availability == 2" />No<br/>
        </div>
     </div>
    `
})

export class PersonDetailComponent {
    @Input() person: Person;
    // isAvailable: true;

    // @Input() isAvailable = false;
    // @Output() isAvailableChange = new EventEmitter();

    // getAvailable(): void {
    //     this.isAvailable = false;
    //     this.isAvailableChange.emit(false);
    // }
}

// <input #available [ngModel]='person.availability'
//         (click)='person.availability=available.value'
//         (change)='addOption=false; addCalendar=false'
//         name='availability' type="radio" value="Yes">
//         Yes
// <input #notavailable [ngModel]='person.availability'
//         (click)='person.availability=notavailable.value'
//         (change)='addOption=notavailable.checked'
//         name='availability' type="radio" value="No">
//         No<br>
