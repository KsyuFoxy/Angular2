import { Component } from '@angular/core';
import { PersonsComponent } from './components/person/persons.component';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
    selector: 'app-root',
    template: `
    <section class='section-container'>
          <h1>{{title}}</h1>
          <nav>
              <a routerLink="/persons">VoltAge Team</a>
              <a routerLink="/tasks">Task board</a>
          </nav>
          <router-outlet></router-outlet>
    </section>
    `,
    styleUrls: [ './app.component.css' ]
})

export class AppComponent {
    title = 'VoltAge Team';
}
