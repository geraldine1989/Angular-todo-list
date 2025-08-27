import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { TodoItem } from "../todo-item/todo-item";

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

@Component({
  selector: 'app-task-list',
  imports: [MaterialModule, TodoItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})

export class TaskList {
  @Input() tasks: Task[] = [];
  @Output() toggle = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<string>();
  
  onToggle(task: Task):void {
    this.toggle.emit(task);
  }
  
  onDelete(id: string): void {
    this.delete.emit(id);
  }
}
