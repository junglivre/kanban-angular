import { Component } from '@angular/core';
import { BoardComponent } from './kanban/board/board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [BoardComponent],
  standalone: true
})
export class AppComponent {
  title = 'kanban';
}
