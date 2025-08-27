import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

@Component({
  selector: 'app-task-list',
  imports: [NgClass, MatIconModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})

export class TaskList {
  @Input() tasks: Task[] = [];
  @Output() toggle = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<string>();
  
  onToggle(task: Task) {
    this.toggle.emit(task);
  }
  
  onDelete(id: string): void {
    this.delete.emit(id);
  }
}
