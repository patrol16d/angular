import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

@Input()
tasks: Task[];

@Output()
remove = new EventEmitter<number>();

removeTask(taskIdx: number) {
    this.remove.emit(taskIdx);
}

}
