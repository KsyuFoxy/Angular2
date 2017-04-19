import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { FrameDetailComponent } from './frame-detail.component';
import { FramesComponent } from './frames.component';
import { FrameService } from './frame.service';
import { TaskboardComponent } from './taskboard.component';
import { TaskService } from './task.service';
import { TaskDetailComponent } from './task-detail.component';


import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,
                FormsModule,
                RouterModule.forRoot([
                      {
                        path: 'frames',
                        component: FramesComponent
                    },
                    {
                        path: 'taskboard',
                        component: TaskboardComponent
                    }
                    ])
                 ],
  declarations: [ AppComponent,
                FrameDetailComponent,
                FramesComponent,
                TaskDetailComponent,
                TaskboardComponent ],
  providers:    [ FrameService,
                TaskService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
