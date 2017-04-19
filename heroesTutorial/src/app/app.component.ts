import { Component } from '@angular/core';
import { FramesComponent } from './frames.component';
import { TaskboardComponent } from './taskboard.component';


@Component({
    selector: 'app-root',
    template: `
    <section class='section-container'>
          <h1>{{title}}</h1>
          <nav>
              <a routerLink="/frames">VA Team</a>
              <a routerLink="/taskboard">Task board</a>
          </nav>
          <router-outlet></router-outlet>
    </section>
    `,
    styleUrls: [ './app.component.css' ]
})

export class AppComponent {
    title = 'VA Team';
}
