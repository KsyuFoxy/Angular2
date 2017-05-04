import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pipe, PipeTransform, OnInit } from '@angular/core';

import { Task } from './task';

@Pipe({name:'filter'})

export class FilterPipe implements PipeTransform {
    // @Input() tasks: Task[];
    // @Input() task: Task;
    // taskName: string;

    //  ngOnInit() {
    //     this.getTasksNames();
    //  }
    //  getTasksNames() {
    //     // this.taskName = this.tasks.find(x => x.name === name);
    //  }
 // constructor() {
 //      var taskName = this.tasks.map(a => a.name)
 //      console.log('taskName:', this.taskName);
 //      console.log('tasks', this.tasks)
 // }

  transform(value, exponent) {
       console.log('value:', value);
       console.log('exponent:', exponent);

       if(!exponent)  return value;
       return value.filter(item => item.indexOf(exponent) > -1);
  }
}

@Component ({
    selector: 'pipes',
    template: `
    <h1>Alternative search</h1>
       <input type="text" [(ngModel)]="filterText">
        <ul>
            <li *ngFor="let product of products | filter: filterText">
                {{product}}
            </li>
        </ul>
        <h1>finish</h1>
    `,
    styleUrls: ['./search.component.css', './tasks.component.css']
})

export class PipesComponent {

    private products = ["Apple", "Banana", "Orange"];
    // @Input() searchInput: string = '';
    // @Output() searchInputChange = new EventEmitter();
    // @Input() tasks: Task[];
    // @Input() task: Task;


    //
    // row: Task;
    // filteredRows: Task[];

}
