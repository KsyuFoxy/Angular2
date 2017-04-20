import { Component } from '@angular/core';
import { PersonsComponent } from './persons.component';
import { TasksComponent } from './tasks.component';

@Component({
    selector: 'app-root',
    template: `
    <section class='section-container'>
          <h1>{{title}}</h1>
          <nav>
              <a routerLink="/persons">VA Team</a>
              <a routerLink="/tasks">Task board</a>
          </nav>
          <router-outlet></router-outlet>
    </section>
    `,
    styleUrls: [ './app.component.css' ]
})

export class AppComponent {
    title = 'VA Team';
}
