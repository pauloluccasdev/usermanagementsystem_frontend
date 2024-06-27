import { Component, OnInit } from '@angular/core';
import { Department } from '../../models/department';
import { DepartmentService } from '../../service/department.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'actions'];
  departments: Department[] = [];

  constructor(
    private departmentService: DepartmentService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentService.getDepartments().subscribe(departments => {
      this.departments = departments;
    })
  }

  deleteDepartment(id: number) {
    this.departmentService.deleteDepartment(id).subscribe({
      next:() => {
        this.snackBar.open('Department deleted successfully.', 'Close', {
          duration: 3000,
        });
        this.loadDepartments();
      },
      error:() => {
        this.snackBar.open('Error deleting department.', 'Close', {
          duration: 3000,
        });
      },
    })
  }

}
