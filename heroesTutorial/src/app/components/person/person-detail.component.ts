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
     @Input() style;

     @Input() notAvailable = false;

     @Input()  chosenAvailability = true;
     @Output() chosenAvailabilityChange = new EventEmitter();

     @HostBinding('class.green-style') greenStyle:boolean = false;
     @HostBinding('class.grey-style') greyStyle:boolean = false;

     ngOnChanges(changes) {
         if (changes.person && !changes.person.firstChange) {
             const availability = changes.person.currentValue.availability;
             this.greenStyle = availability === 1;
             this.greyStyle = availability  === 2;
         }
     }

      onRBChange(availability) {
         this.chosenAvailability = !this.chosenAvailability;
         this.chosenAvailabilityChange.emit(this.chosenAvailability);
        }
}
