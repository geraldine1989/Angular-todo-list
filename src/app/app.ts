import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

interface Task {
  title: string;
  isDone: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App {
  newTask: string = '';
  tasks: Task[] = [];

  addTask(): void {
    if (this.newTask.trim()) {
      this.tasks.push({title: this.newTask, isDone: false});
      this.newTask = '';
    }
  }
}
