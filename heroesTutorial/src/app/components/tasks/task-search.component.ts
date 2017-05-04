import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { TaskSearchService } from './task-search.service';
import { Task } from './task';

@Component ({
    selector: 'task-search',
    template: `
        <div class='search-container'>
            <input #searchBox id="search-box" (keyup)="search(searchBox.value)" />

            <ul class='tasks'>
                <li *ngFor="let row of filteredRows | async" >
                <span class='task-id'>{{row.id}}</span>
                {{row.name}}
                </li>
            </ul>
        <div>
    `,
    styleUrls: ['./search.component.css', './tasks.component.css'],
    providers: [TaskSearchService]
})

export class TaskSearchComponent implements OnInit {
    tasks: Observable<Task[]> ;
    private searchTerms = new Subject<string>();

    constructor(
        private taskSearchService: TaskSearchService,
        private router: Router) {}

      search(term: string): void {
        this.searchTerms.next(term);
      }

      ngOnInit(): void {
        this.tasks = this.searchTerms
          .debounceTime(300)        // wait 300ms after each keystroke before considering the term
          .distinctUntilChanged()   // ignore if next search term is same as previous
          .switchMap(term => term   // switch to new observable each time the term changes
            // return the http search observable
            ? this.taskSearchService.search(term)
            // or the observable of empty heroes if there was no search term
            : Observable.of<Task[]>([]))
          .catch(error => {
            // TODO: add real error handling
            console.log(error);
            return Observable.of<Task[]>([]);
          });
      }

    //   gotoDetail(task: Task): void {
    //     let link = ['/detail', task.id];
    //     this.router.navigate(link);
    //   }

}
