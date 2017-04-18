import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <ul class='heroes'>
    <li *ngFor='#hero of heroes'
        [class.selected]="hero === selectedHero"
        (click)='onSelected(hero)'>
        <span class='badge'>{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <div *ngIf='selectedHero'>
  <h2>{{selectedHero.name}}</h2>
    <div>
        <label>id: </label>
        {{selectedHero.id}}
    </div>
    <div>
        <label>Name: </label>
        <input [(ngModel)]='selectedHero.name' placeholder='name' />
    </div>
  </div>

  `
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  public heroes = HEROES;
  onSelect(hero: Hero) {this.selectedHero = hero;}
}

var HEROES: Hero[] = [
    {'id': 1, 'name': 'Dilan'},
    {'id': 2, 'name': 'Bill'},
    {'id': 3, 'name': 'Charli'},
    {'id': 4, 'name': 'John'}
]
