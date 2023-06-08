import { Column, Entity, PrimaryColumn, ManyToOne, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import { genSalt, hash } from "bcrypt";

export enum UserType {
    admin = 'admin',
    user = 'user',
  }

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'varchar', length:(45)})
    user:string
    
    @Column({
        type: 'enum',
        enum: UserType,
      })
      user_type: UserType;
      
    @Column({type:'varchar'})
    name:string

    @Column({type:'varchar'})
    password:string

    @BeforeInsert()
    async hashPassword() {
      const saltRounds = 10;
      const salt = await genSalt(saltRounds);
      const hashedPassword = await hash(this.password, salt);
      this.password = hashedPassword;
    }
}