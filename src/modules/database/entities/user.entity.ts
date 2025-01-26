import { Role } from '../../common/types/role.type';


export class UserEntity {

  id: string;

  name: string;

  email: string;

  password: string;

  roles: Role.USER;
}