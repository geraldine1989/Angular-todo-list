import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss'
})

export class AddTask {
  newTask: string = '';
  @Output() taskAdded = new EventEmitter<string>();


  addTask(): void {
    const taskValue = this.newTask.trim();
    if (taskValue) {
      this.taskAdded.emit(taskValue);
      this.newTask = '';
    }
  }
}
