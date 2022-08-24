/* eslint-disable prettier/prettier */
import { DoctorProfessionalInfo } from 'src/doctorprofessionalinfo/doctorprofessionalinfo.entity';
import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class DoctorCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => DoctorProfessionalInfo,
    (doctorProfessionalInfos) => doctorProfessionalInfos.areaofSpeciality,
    {
      cascade: true,
    },
  )
  doctorProfessionalInfos: DoctorProfessionalInfo[];
}
