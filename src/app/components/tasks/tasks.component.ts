import { Component,HostListener } from '@angular/core';
import {TASKS as mockTasks} from '../../mock-tasks';
import {Task} from '../../Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks:Task[]=mockTasks;
  onNotify(id:number):void{
    this.tasks=this.tasks.filter(task => task.id !== id);
  }
}
