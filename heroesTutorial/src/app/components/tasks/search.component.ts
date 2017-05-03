import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TASKS } from './mock-tasks';
import { TaskService } from './task.service';

import { Task } from './task';

@Component ({
    selector: 'search',
    template: `
        <div class='search-container'>
            <input [(ngModel)]='searchInput' name='search'>
            <ul class='tasks'>
                <li *ngFor="let row of visibleRows">
                <span class='task-id'>{{row.id}}</span>
                {{row.name}}
                </li>
            </ul>
            <button (click)='doSearch()' >Search</button>
        <div>
    `,
    styleUrls: ['./search.component.css', './tasks.component.css']
})

export class SearchComponent {
    @Input() searchInput: string;
    @Output() searchInputChange = new EventEmitter();
    @Input() tasks: Task[];
    @Input() task: Task;
    // taskNames: string;
    // otherTasks: number;
    // inputName: string;
    name: string;
    filteredTasks: Task[];
    row: Task;
    visibleRows: Task[];

    doSearch() {
      this.filteredTasks = this.tasks.filter(
              task => task.name === this.searchInput);
              console.log(this.filteredTasks);
        this.visibleRows =  this.filteredTasks;
    }

    // doSearch(newInput: string): void {
    //     this.searchInputChange.emit(newInput);
    //     const taskNames = this.tasks.map(a => a.name);
    //
    //     for (var i = 0; i < this.tasks.length; i++) {
    //         if (this.searchInput == ' ') {
    //         console.log('nothing is found')
    //     } else {
    //             var inputName = this.tasks[i].name;
    //             var otherTasks = this.tasks.length - 1;
    //             var index = taskNames.indexOf(this.tasks[i].name);
    //             console.log('index:', index);
    //             this.tasks.splice(index, otherTasks);
    //
    //             console.log('find:', this.tasks[i].name);
    //
    //         }
    //     }
    //
    //         console.log('searchElement:', this.searchInput);
    //         console.log('name:', taskNames)
    // }
}
