import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserResponse } from '../../models/user';
import { DepartmentService } from '../../service/department.service';
import { Department } from '../../models/department';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit {
  departmentForm: FormGroup;
  departmentId!: number;

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.departmentForm = this.fb.group({
      id: [this.departmentId],
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.departmentId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.departmentId) {
      this.departmentService.getDepartment(this.departmentId).subscribe((department: Department) => {
        this.departmentForm.patchValue(department);
      });
    }
  }

  onSubmit(): void {
    if (this.departmentId) {
      this.departmentForm.patchValue({id: this.departmentId});
      this.departmentService.updateDepartment(this.departmentId, this.departmentForm.value).subscribe({
        next:() => {
          this.snackBar.open('Department updated successfully', 'Close', {
            duration: 3000,
          });
          this.router.navigate(['/departments']);
        },
        error:() => {
          this.snackBar.open('Error updating department.', 'Close', {
            duration: 3000,
          });
        },
      });
    } else {
      this.departmentService.createDepartment(this.departmentForm.value).subscribe({
        next:() => {
          this.snackBar.open('Department created successfully', 'Close', {
            duration: 3000,
          });
          this.router.navigate(['/departments']);
        },
        error:() => {
          this.snackBar.open('Error creating department.', 'Close', {
            duration: 3000,
          });
        },
      });
    }
  }
}
