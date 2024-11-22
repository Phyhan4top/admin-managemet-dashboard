import { Roles, STATUS } from "@utils/roles";

type User = {
  id: any;
  username: string;
  email: string;
  password: string;
  role: Roles;
  status: STATUS;
  createdAt?: string;
  updatedAt?: string;
  password: string;
  photo?:string
};
type AllUserResponse = {
  status: 'error' | 'sucess';
  meta: {
    currentPage: number;
    totalPages: number;
    totalRecords: number;
  };
  data: User[];
};
type UserResponse = {
  status: 'error' | 'sucess';
  data: User;
};
