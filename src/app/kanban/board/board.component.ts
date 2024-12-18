import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';

interface Task {
  id: number;
  title: string;
  description: string;
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
    { id: 1, title: 'Criar Layout', description: 'Desenvolver o layout do quadro Kanban', status: 'todo' },
    { id: 2, title: 'Implementar Componentes', description: 'Criar os componentes necessários', status: 'doing' },
    { id: 3, title: 'Testar Aplicação', description: 'Realizar testes básicos', status: 'done' }
  ];

  getTasks(status: 'todo' | 'doing' | 'done'): Task[] {
    return this.tasks.filter(task => task.status === status);
  }
}
