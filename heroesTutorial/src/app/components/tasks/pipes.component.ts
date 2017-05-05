import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pipe, PipeTransform, OnInit } from '@angular/core';

import { Task } from './task';

@Pipe({name:'filter'})

export class FilterPipe implements PipeTransform {
    @Input() tasks: Task[];
    @Input() task: Task;

  transform(value, exponent) {
       console.log('value:', value);
       console.log('exponent:', exponent);

       if(!exponent)  return value;
       var valueName = value.map(a => a.name.toLowerCase());
        console.log('valueName:', valueName);
       return valueName.filter(item => item.indexOf(exponent) > -1);

  }
}

@Component ({
    selector: 'pipes',
    template:`
    <div class='pipes'>

        <h2>Alternative search</h2>
           <input type="text" [(ngModel)]="filterText">
            <ul class='tasks'>
                <li *ngFor="let task of tasks| filter: filterText">
                        <span class='task-id'>{{task.id}}</span>
                    {{task}}
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
