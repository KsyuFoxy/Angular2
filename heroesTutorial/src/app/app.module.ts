import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PersonDetailComponent } from './components/person/person-detail.component';
import { PersonsComponent } from './components/person/persons.component';
import { PersonService } from './components/person/person.service';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskService, NewTaskService } from './components/tasks/task.service';
import { TaskDetailComponent } from './components/tasks/task-detail.component';
import { NewTaskComponent } from './components/tasks/new-task.component';
import { SearchComponent } from './components/tasks/search.component';
import { PipesComponent, FilterPipe } from './components/tasks/pipes.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalDialog } from './components/modal/modal-window.component';


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
                    },
                    {
                        path: 'modal',
                        component: ModalComponent
                    }
                    ])
                 ],
  declarations: [ AppComponent,
                PersonDetailComponent,
                PersonsComponent,
                TaskDetailComponent,
                NewTaskComponent,
                TasksComponent,
                SearchComponent,
                PipesComponent, FilterPipe,
                ModalComponent,
                ModalDialog],
  providers:    [ PersonService,
                TaskService,
                NewTaskService,
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
