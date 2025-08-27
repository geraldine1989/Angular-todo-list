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
  standalone: true,
  imports: [RouterOutlet, AddTask, TaskList],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})


export class App {
  tasks: Task[] = [];

  onTaskAdded(title: string): void {
    this.tasks = [
      ...this.tasks,
      { id: uuidv4(), title, isDone: false }
    ];
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  toggleTask(task: Task):void {
    this.tasks = this.tasks.map(item => (item.id === task.id ? {...item, isDone: !item.isDone} : item));
  } 
}
