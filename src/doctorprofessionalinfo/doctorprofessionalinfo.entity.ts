/* eslint-disable prettier/prettier */
import { User } from 'src/auth/user.entity';
import { DoctorCategory } from 'src/Doctorcategory/doctorCategory.entity';
import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToOne,
	PrimaryGeneratedColumn,
	Unique,
} from 'typeorm';

@Entity()
@Unique(['user'])
export class DoctorProfessionalInfo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  consultation_Fee: number;

  @Column({ nullable: true, array: true })
  experiences: string;

  @OneToOne(() => User, (user) => user.doctorProfessionalInfo, {
    onDelete: 'CASCADE',
  }) // specify inverse side as a second parameter
  @JoinColumn()
  user: User;

  //Array of objects
  //TO provide data in array of objects we use type:'jsonb' and we also create a interface with fields whom array of
  //objects we should create.
  @Column({ nullable: true, type: 'jsonb' })
  certifications: certificationProperties[];

  @ManyToOne(
    () => DoctorCategory,
    (areaofSpeciality) => areaofSpeciality.doctorProfessionalInfos,
    {
      onDelete: 'CASCADE',
    },
  ) // specify inverse side as a second parameter
  areaofSpeciality: DoctorCategory;
}

export interface certificationProperties {
  certificationName: string;
  certificationFileName?: string;
  cerficationCloudLink: string;
}
