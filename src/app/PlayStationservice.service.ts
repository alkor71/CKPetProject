import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Platform } from './platform.model';

@Injectable({
  providedIn: 'root'
})

export class PlayStationService 
{
  private tasks: Platform[] = this.loadTasks();
  private tasksSubject: BehaviorSubject<Platform[]> = new BehaviorSubject<Platform[]>(this.tasks);

  constructor() { }

  addTask(task: Platform): void 
  {
    this.tasks.push(task);
    this.updateTasks();
  }

  editTask(id: number, updatedTask: Platform): void 
  {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.updateTasks();
    }
  }

  deleteTask(id: number): void 
  {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.updateTasks();
  }

  getTasks(): Observable<Platform[]> 
  {
    return this.tasksSubject.asObservable();
  }

  private saveTasks(): void 
  {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private loadTasks(): Platform[] 
  {
    const PlayStationsavedTasks = localStorage.getItem('tasks');
    return PlayStationsavedTasks ? JSON.parse(PlayStationsavedTasks) : [];
  }

  private updateTasks(): void 
  {
    this.saveTasks();
    this.tasksSubject.next(this.tasks);
  }

}