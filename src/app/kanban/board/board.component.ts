import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';

interface Task {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  status: 'todo' | 'doing' | 'done';
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  standalone: true,
  imports: [CommonModule, TaskComponent]
})
export class BoardComponent {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Criar Layout',
      description: 'Desenvolver o layout do quadro Kanban',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      status: 'todo'
    },
    {
      id: 2,
      title: 'Implementar Componentes',
      description: 'Criar os componentes necessários',
      longDescription: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      status: 'doing'
    },
    {
      id: 3,
      title: 'Testar Aplicação',
      description: 'Realizar testes básicos',
      longDescription: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
      status: 'done'
    }
  ];

  getTasks(status: 'todo' | 'doing' | 'done'): Task[] {
    return this.tasks.filter(task => task.status === status);
  }
}
