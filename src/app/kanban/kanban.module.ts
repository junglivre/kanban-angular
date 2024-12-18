import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    BoardComponent,
    TaskComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BoardComponent
  ]
})
export class KanbanModule { }
