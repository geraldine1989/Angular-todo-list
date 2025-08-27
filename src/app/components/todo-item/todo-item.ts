import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { MaterialModule } from '../../shared/material.module';


@Component({
  selector: 'app-todo-item',
  imports: [MaterialModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss'
})

export class TodoItem {
  @Input() task!: Task;

  @Output() toggle = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<string>();

  onToggle():void {
    this.toggle.emit(this.task);
  }

  onDelete():void {
    this.delete.emit(this.task.id);
  }
}
