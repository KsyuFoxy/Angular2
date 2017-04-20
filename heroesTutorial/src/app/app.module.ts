import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { PersonDetailComponent } from './person-detail.component';
import { PersonsComponent } from './persons.component';
import { PersonService } from './person.service';
import { TasksComponent } from './tasks.component';
import { TaskService } from './task.service';
import { TaskDetailComponent } from './task-detail.component';
import { NewTaskComponent } from './new-task.component';


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
                TasksComponent ],
  providers:    [ PersonService,
                TaskService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
