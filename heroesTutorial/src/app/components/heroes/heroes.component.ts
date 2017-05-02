import { Component } from '@angular/core';
import { Hero } from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from '@angular/core';


@Component({
  selector: 'my-heroes',
  template: `
    <ul class="heroes">
        <li *ngFor="let hero of heroes"
            (click)="onSelect(hero)"
            [class.selected]="hero === selectedHero" >
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
    </ul>
    <my-hero-details [hero]='selectedHero'></my-hero-details>
  `,
  styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];

    constructor(private _heroService: HeroService) {}

    ngOnInit () {
        this.getHeroes();
    }
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }

 }
