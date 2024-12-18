import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
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
  isModalOpen = false;
  animationState: 'entering' | 'leaving' | null = null;

  toggleModal() {
    if (this.isModalOpen) {
      // Iniciando animação de saída
      this.animationState = 'leaving';
      setTimeout(() => {
        this.isModalOpen = false;
        this.animationState = null;
      }, 300); // Duração da animação
    } else {
      this.isModalOpen = true;
      this.animationState = 'entering';
    }
  }
}
