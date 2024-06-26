import { Component, OnInit } from '@angular/core';
import { Department } from '../../models/department';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'actions'];
  departments: Department[] = [];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentService.getDepartments().subscribe(departments => {
      this.departments = departments;
    })
  }

}
