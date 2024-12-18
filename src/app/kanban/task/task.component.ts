import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'doing' | 'done';
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TaskComponent {
  @Input() task!: Task;
}
