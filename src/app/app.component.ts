import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Task} from './task';
import { MyDialogComponent } from './my-dialog/my-dialog.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';
  tasks: Task[] = [];
  
  constructor(public dialog: MatDialog){};

  handleTaskAdd(description: string) {
    if (description && description.length > 0) {
        this.tasks.push({description: description, done: false });
    }
  }

  handleTaskRemove(taskIdx: number) {
    this.tasks.splice(taskIdx, 1);
   }

    openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  } 

}
