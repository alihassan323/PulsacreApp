/* eslint-disable prettier/prettier */
import { User } from 'src/auth/user.entity';
import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
	Unique,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class Socialauth extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  social_Id: string;

  @Column({ nullable: true })
  email: string;

  // @Column({ nullable: true })
  // socialType: string;

  @OneToOne(() => User, (user) => user.socialauth, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: User;
}
