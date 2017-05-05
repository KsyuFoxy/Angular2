import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalDialog } from './modal-window.component';

// import { Person } from '../person/person';

@Component({
  selector: 'modal',
  template: `
        <h2>{{title}}<h2>
        <div *ngIf='modal' class='person-data'>
            <p> <span>ID: </span>{{person.id}}</p>
            <p> <span>Name: </span>{{person.name}}</p>
        </div>

        <button type="button" (click)="modal.show()">Start</button>
        <modal-window #modal>
            <div class="app-modal-header">
                <h2>New Person</h2>
            </div>
            <div class="app-modal-body">
                <label>Person ID:</label>
                <input type="text" [(ngModel)]="person.id" /><br>
                <label>Person name:</label>
                <input type="text" [(ngModel)]="person.name" />
            </div>
            <div class="app-modal-footer">
                <button (click)="modal.hide()"> Save and Close</button>
            </div>
        </modal-window>

`,
styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    title = 'Create a new person';
    person = {id: '', name: ''};
    // @Input() person: Person;
    // personCreated = false;






}
