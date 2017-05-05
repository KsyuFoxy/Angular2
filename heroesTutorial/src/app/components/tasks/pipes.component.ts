import { Component, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

import { Task } from './task';

@Pipe({name:'myFilter'})

export class FilterPipe implements PipeTransform {
    @Input() tasks: Task[];
    @Input() task: Task;

  transform(tasks, searchText) {
      if (searchText) {
          var filteredTasks = tasks.filter(item =>  item.name.toLowerCase().indexOf(searchText) !== -1)
          return filteredTasks;
      }
      return tasks;
  }
}

@Component ({
    selector: 'pipes',
    template:`
    <div class='pipes'>
        <h2>Alternative search</h2>
           <input type="text" [(ngModel)]="filterText"/>
            <ul class='tasks'>
                <li *ngFor="let task of tasks| myFilter: filterText">
                        <span class='task-id'>{{task.id}}</span>
                    {{task.name}}
                </li>
            </ul>
    <div>
    `,
    styleUrls: ['./search.component.css', './tasks.component.css']
})

export class PipesComponent {
    @Input() tasks: Task[];
    @Input() task: Task;
}
