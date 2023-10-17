import { ROLE } from '../constants/roles';

export class UserDTO {
  id?: number;
  username?: string;
  password?: string;
  email?: string;
  role?: ROLE;
}
