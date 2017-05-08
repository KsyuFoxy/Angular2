import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalDialog } from './modal-window.component';

import {Person} from '../person/person';
import {PERSONS} from '../person/mock-persons';

@Component({
  selector: 'modal',
  template: `
        <h2>{{title}}<h2>
        <div *ngIf='person.isSaved && !added' class='person-data'>
            <p> <span>ID: </span>{{person.id}}</p>
            <p> <span>Name: </span>{{person.name}}</p>
            <div class='person-image'>
                <img src='{{person.image}}'/>
            </div>
            <button type="button" (click)="modal.edit()">Edit</button>
            <button class='add-person' type="button" (click)="addToPersons(newPerson)">Add to Persons</button>
            <button type="button" (click)="modal.delete()">Do not Save</button>
        </div>

        <button *ngIf='!person.isSaved || added' type="button" (click)="modal.show()">Start</button>
        <modal-window #modal [(person)]='person' [(added)]='added'>
            <div class="app-modal-header">
                <h2>New Person</h2>
            </div>
            <div class="app-modal-body">
                <label>ID:</label>
                <input type="text" [(ngModel)]="person.id" /><br>
                <label>Name:</label>
                <input type="text" [(ngModel)]="person.name" /><br>
                <label>Image:</label>
                <input [(ngModel)]="person.image" placeholder='add an http-link of an image'/><br>
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
    person = {id: '', name: '', image:'', isSaved: false};
    added = true;
    @Input() newPerson = this.person;
    @Input() persons: Person[] = PERSONS;

    addToPersons(newPerson: Person) {
        var addPerson = {
            id: newPerson.id,
            name: newPerson.name,
            image: newPerson.image,
            availability: newPerson.availability
        }
        this.persons.push(addPerson);
        this.added = true;
        console.log('persons', this.persons)
    }

}
