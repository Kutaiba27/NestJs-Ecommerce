import { UserRole } from '../types/role.enum';


export class UserEntity implements IUser {

  id: string;

  name: string;

  email: string;

  password: string;

  role: UserRole;
}

export abstract class IUser {
  name: string;
  email: string;
  role: UserRole;
}