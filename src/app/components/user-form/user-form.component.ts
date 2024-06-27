import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../../models/department';
import { UserService } from '../../service/user.service';
import { DepartmentService } from '../../service/department.service';
import { User, UserResponse } from '../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  departments: Department[] = [];
  userId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      departmentId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(departments => {
      this.departments = departments;
    });

    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.userId) {
      this.userService.getUser(this.userId).subscribe((user: UserResponse) => {
        this.userForm.patchValue(user);
      });
    }
  }

  onSubmit(): void {
    if (this.userId) {
      this.userService.updateUser(this.userId, this.userForm.value).subscribe({
        next:() => {
          this.snackBar.open('User updated successfully', 'Close', {
            duration: 3000,
          });
          this.router.navigate(['/users']);
        },
        error:() => {
          this.snackBar.open('Error updating user.', 'Close', {
            duration: 3000,
          });
        },
      });
    } else {
      this.userService.createUser(this.userForm.value).subscribe({
        next:() => {
          this.snackBar.open('User created successfully', 'Close', {
            duration: 3000,
          });
          this.router.navigate(['/users']);
        },
        error:() => {
          this.snackBar.open('Error creating user.', 'Close', {
            duration: 3000,
          });
        },
      });
    }
  }
}
