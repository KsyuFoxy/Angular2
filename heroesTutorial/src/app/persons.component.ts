import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { OnInit } from '@angular/core';

import { Person } from './person';
import { PersonDetailComponent } from './person-detail.component';
import { PersonService } from './person.service';


@Component({
  selector: 'my-persons',
  template: `
    <div class="persons">
        <section *ngFor="let person of persons"
            (click)="onSelect(person)"
            [ngClass]="{ 'selected' : person === selectedPerson, 'available' : person.availability === 2 }"
            (change)="getAvailable(selectedPerson)">
            <div class='image'>
                <img src='{{person.image}}'/>
            </div>
            <div class="badge">{{person.id}}</div>
            <p class='name'>{{person.name}}</p>
        </section>
    </div>
    <my-person-details [person]='selectedPerson' [(notAvailable)]='notAvailable' [(chosenAvailability)]='chosenAvailability'></my-person-details>
  `,
  styleUrls: [ './persons.component.css' ]
})

export class PersonsComponent implements OnInit {
    selectedPerson: Person;
    persons: Person[];
    notAvailable: boolean;
    chosenAvailability: boolean;

    constructor(private _personService: PersonService) { }

    ngOnInit () {
        this.getPersons();
    }
    getPersons() {
        this._personService.getPersons().then(persons => this.persons = persons);
    }

    onSelect(person: Person): void {
      this.selectedPerson = person;
           this.chosenAvailability = !this.chosenAvailability;
    }
    getAvailable(selectedPerson: Person): void {
        if(this.notAvailable) {
            this.notAvailable = !this.notAvailable;
            this.selectedPerson = selectedPerson;
        }
        else if (!this.notAvailable ) {
            this.notAvailable = false;
        }

    }

 }
