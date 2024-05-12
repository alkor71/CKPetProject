import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Platform as XB } from '../platform.model';
import { XBoxService } from '../XBoxservice.service';

@Component({
  selector: 'app-X-Box',
  templateUrl: './X-Box.component.html',
  styleUrls: ['./X-Box.component.css']
})

export class XBoxComponent implements OnInit 
{
  XBoxForm!: FormGroup;
  XBoxGames: XB[] = [];
  editing: boolean = false;
  currentTaskId: number | null = null;

  constructor(private formBuilder: FormBuilder, private taskService: XBoxService) { }

  ngOnInit(): void 
  {
    this.XBoxForm = this.formBuilder.group({
      name: ['', Validators.required],
      publisher: ['', Validators.required],
      genre: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.taskService.getTasks().subscribe((tasks: XB[]) => {
      this.XBoxGames = tasks;
    });
  }

  onSubmit(): void 
  {
    if (this.XBoxForm.valid) {
      const taskData = this.XBoxForm.value;
      if (this.editing && this.currentTaskId !== null) {
        this.taskService.editTask(this.currentTaskId, {
          ...taskData,
          id: this.currentTaskId,
          lastModifiedAt: new Date()
        });
      } else {
        const newTask: XB = {
          id: Math.floor(Math.random() * 1000),
          createdAt: new Date(),
          lastModifiedAt: new Date(),
          ...taskData
        };
        this.taskService.addTask(newTask);
      }
      this.XBoxForm.reset();
      this.editing = false;
      this.currentTaskId = null;
    }
  }

  onEdit(task: XB): void 
  {
    this.editing = true;
    this.currentTaskId = task.id;
    this.XBoxForm.patchValue(task);
  }

  onDelete(taskId: number): void 
  {
    this.taskService.deleteTask(taskId);
  }

}