import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { PersonDetailComponent } from './components/person/person-detail.component';
import { PersonsComponent } from './components/person/persons.component';
import { PersonService } from './components/person/person.service';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskService, NewTaskService } from './components/tasks/task.service';
import { TaskDetailComponent } from './components/tasks/task-detail.component';
import { NewTaskComponent } from './components/tasks/new-task.component';
import { SearchComponent } from './components/tasks/search.component';


import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,
                FormsModule,
                RouterModule.forRoot([
                      {
                        path: 'persons',
                        component: PersonsComponent
                    },
                    {
                        path: 'tasks',
                        component: TasksComponent
                    }
                    ])
                 ],
  declarations: [ AppComponent,
                PersonDetailComponent,
                PersonsComponent,
                TaskDetailComponent,
                NewTaskComponent,
                TasksComponent,
                SearchComponent],
  providers:    [ PersonService,
                TaskService,
                NewTaskService,
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
