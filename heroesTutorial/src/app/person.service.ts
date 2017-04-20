import {Injectable} from '@angular/core';
import {PERSONS} from './mock-persons';

@Injectable()
export class PersonService {
    getPersons() {
        return Promise.resolve(PERSONS);
    }
}
