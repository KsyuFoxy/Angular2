import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from './task';

@Component ({
    selector: 'search',
    template: `
        <div class='search-container'>
            <input [(ngModel)]='searchInput' name='search'/>
            <button (click)='doSearch()'>Search</button>
            <button (click)='clearSearch()' class='clear-search'>X</button>
            <ul class='tasks'>
                <li *ngFor="let row of filteredRows; showNotFilteredTasks">
                <span class='task-id'>{{row.id}}</span>
                {{row.name}}
                </li>
            </ul>
        </div>
    `,
    styleUrls: ['./search.component.css', './tasks.component.css']
})

export class SearchComponent {
    @Input() searchInput: string ='';
    @Output() searchInputChange = new EventEmitter();
    @Input() tasks: Task[];
    @Input() task: Task;

    name: string;
    filteredTasks: Task[];
    @Input() showNotFilteredTasks = true;
    @Output() showNotFilteredTasksChange = new EventEmitter();
    row: Task;
    filteredRows: Task[];

    doSearch() {
      this.filteredTasks = this.tasks.filter(
              task => task.name.toLowerCase() === this.searchInput.toLowerCase());
        this.filteredRows =  this.filteredTasks;
        this.showNotFilteredTasks = false;
        this.showNotFilteredTasksChange.emit(false);
    }
    clearSearch() {
        this.filteredRows.splice(0, this.filteredTasks.length);
        this.showNotFilteredTasks = true;
        this.showNotFilteredTasksChange.emit(true);
        this.searchInput = null;
    }
}
