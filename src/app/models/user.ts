export interface User {
  id: number;
  name: string;
  email: string;
  departmentId: number;
}

export interface UserResponse {
  name: string;
  email: string;
  departmentName: string;
}
