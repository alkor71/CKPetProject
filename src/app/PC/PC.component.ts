import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Platform } from '../platform.model';
import { PCService } from '../PCservice.service';

@Component({
  selector: 'app-PC',
  templateUrl: './PC.component.html',
  styleUrls: ['./PC.component.css']
})

export class PCComponent implements OnInit 
{
  PCForm!: FormGroup;
  tasks: Platform[] = [];
  editing: boolean = false;
  currentTaskId: number | null = null;

  constructor(private formBuilder: FormBuilder, private taskService: PCService) { 
    taskService = new PCService()
  }

  ngOnInit(): void 
  {
    this.PCForm = this.formBuilder.group({
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
    if (this.PCForm.valid) {
      const taskData = this.PCForm.value;
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
      this.PCForm.reset();
      this.editing = false;
      this.currentTaskId = null;
    }
  }

  onEdit(task: Platform): void 
  {
    this.editing = true;
    this.currentTaskId = task.id;
    this.PCForm.patchValue(task);
  }

  onDelete(taskId: number): void 
  {
    this.taskService.deleteTask(taskId);
  }

}