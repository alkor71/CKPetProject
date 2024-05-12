import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Platform } from '../platform.model';
import { PlayStationService } from '../PlayStationservice.service';

@Component({
  selector: 'app-PlayStation',
  templateUrl: './PlayStation.component.html',
  styleUrls: ['./PlayStation.component.css']
})

export class PLayStationComponent implements OnInit 
{
  PlayStationForm!: FormGroup;
  tasks: Platform[] = [];
  editing: boolean = false;
  currentTaskId: number | null = null;

  constructor(private formBuilder: FormBuilder, private taskService: PlayStationService) {
    taskService = new PlayStationService()
   }

  ngOnInit(): void 
  {
    this.PlayStationForm = this.formBuilder.group({
      name: ['', Validators.required],
      publisher: ['', Validators.required],
      genre: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.taskService.getTasks().subscribe((tasks: Platform[]) => {
      this.tasks = tasks;
    });
  }

  onSubmit(): void 
  {
    if (this.PlayStationForm.valid) {
      const taskData = this.PlayStationForm.value;
      if (this.editing && this.currentTaskId !== null) {
        this.taskService.editTask(this.currentTaskId, {
          ...taskData,
          id: this.currentTaskId,
          lastModifiedAt: new Date()
        });
      } else {
        const newTask: Platform = {
          id: Math.floor(Math.random() * 1000),
          createdAt: new Date(),
          lastModifiedAt: new Date(),
          ...taskData
        };
        this.taskService.addTask(newTask);
      }
      this.PlayStationForm.reset();
      this.editing = false;
      this.currentTaskId = null;
    }
  }

  onEdit(task: Platform): void 
  {
    this.editing = true;
    this.currentTaskId = task.id;
    this.PlayStationForm.patchValue(task);
  }

  onDelete(taskId: number): void 
  {
    this.taskService.deleteTask(taskId);
  }

}