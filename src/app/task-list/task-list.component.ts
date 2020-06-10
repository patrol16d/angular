import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  @Input()
  tasks: Task[];

  @Output()
  remove = new EventEmitter<number>();
  
  removeTask(taskIdx: number) {
        this.remove.emit(taskIdx);
    }

    openDialog(taskId: number, description: string): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
	data: {
		taskId: taskId,
		description: description,
	}
	});

   dialogRef.afterClosed().subscribe(result => {
   	if(result === true){
		this.removeTask(result.taskId);
	}
   });
   }   
}
