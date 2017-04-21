import {Injectable} from '@angular/core';
import {TASKS, NEWTASK} from './mock-tasks';
import { NewTask } from './task';

@Injectable()
export class TaskService {
    getTasks() {
        return Promise.resolve(TASKS);
    }
}
export class NewTaskService {
    getNewTask(): NewTask[] {
        return NEWTASK;
    }
    // {
    // return Promise.resolve(NEWTASK);
    // }
}
