import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

import { AddTask } from "./components/add-task/add-task";
import { TaskList } from "./components/task-list/task-list";

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddTask, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App {
  tasks: Task[] = [];

  onTaskAdded(title: string): void {
    this.tasks.push({
      id: uuidv4(),
      title,
      isDone: false
    })
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  toggleTask(task: Task):void {
    task.isDone = !task.isDone;
  } 
}
