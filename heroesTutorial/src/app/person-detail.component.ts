import {Component, Input, Output, EventEmitter, OnInit, HostBinding} from '@angular/core';
import { Person } from './person';

@Component ({
    selector: 'my-person-details',
    template: `
    <div *ngIf="person && chosenAvailability" (change)='notAvailable' [style]="activeStyle" class="person-detail">
        <h2>{{person.name}}</h2>
        <div><label>id: </label>{{person.id}}</div>
        <div>
            <label>availability: </label>
            <input name="availability" type="radio" [(ngModel)]="person.availability" [value]="1"
                     [checked]="person.availability == 1"
                     (change)="onRBChange(1)" />Yes
            <input name="availability" type="radio" [(ngModel)]="person.availability" [value]="2"
                     [checked]="person.availability == 2"
                     (change)="onRBChange(2)"/>No<br/>
        </div>
     </div>
    `,
     styleUrls: [ './person-detail.component.css' ]
})

export class PersonDetailComponent {
    @Input() person: Person;

// change colors of Child and Parent
     activeStyle : string = 'green';
     @Input() style;

     @Input() notAvailable = false;

    @Input()  chosenAvailability = true;
    @Output() chosenAvailabilityChange = new EventEmitter();

     @HostBinding('class.green-style') greenStyle:boolean = true;
     @HostBinding('class.grey-style') greyStyle:boolean = false;

      onRBChange(availability) {
           if (availability === 1) {
             this.greenStyle = true;
             this.greyStyle = false;
             this.notAvailable = true;
             } else {
                 this.greenStyle = false;
                 this.greyStyle = true;
                 this.notAvailable = false;
             }
         this.chosenAvailability = !this.chosenAvailability ;
        }
}
