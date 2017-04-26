import {Component, Input, Output, EventEmitter, OnInit, HostBinding} from '@angular/core';
import { Person } from './person';

@Component ({
    selector: 'my-person-details',
    template: `
    <div *ngIf="person" [style]="activeStyle" class="yellow-style">
        <h2>{{person.name}} info</h2>
        <div><label>id: </label>{{person.id}}</div>
        <div><label>name: </label>{{person.name}}</div>
        <div>
            <label>availability: </label>
            <input name="availability" type="radio" [(ngModel)]="person.availability" [value]="1"
                     [checked]="person.availability == 1"
                    (click)="activeStyle='yellow'" />Yes
            <input name="availability" type="radio" [(ngModel)]="person.availability" [value]="2"
                     [checked]="person.availability == 2"
                     (click)="activeStyle='red'"/>No<br/>
        </div>
     </div>
    `
})

export class PersonDetailComponent {
    @Input() person: Person;
// change colors
     activeStyle : string = 'yellow';
     @Input() style;

     @HostBinding('class.yellow-style') yellowStyle:boolean = true;
     @HostBinding('class.red-style') redStyle:boolean = false;


       ngOnChanges(changes) {
           if (changes.person.availability === 1) {
                this.yellowStyle = true;
                // let newStyle = changes.style.currentValue;
                //
                // if(newStyle === 'yellow') {
                //     this.yellowStyle = true;
                //     this.redStyle = false;
                // } else if(newStyle === 'red') {
                //     this.yellowStyle = false;
                //     this.redStyle = true;
                // } else {
                //
                // }
           }
           console.log(changes.person)
      }

}
