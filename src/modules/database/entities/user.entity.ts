import { Role } from '../../common/types/role.type';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity({name:"user2"})
export class UserEntity {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({name: "nnname", nullable: true})
  name: string;

  @Column({name: "email", nullable: true})
  email: string;

  @Column({name: "password", nullable: true})
  password: string;

  @Column({name: "role", nullable: true})
  roles: Role.USER;
}