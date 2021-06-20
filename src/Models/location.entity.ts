import { Entity, Column } from 'typeorm';
import { classToPlain } from 'class-transformer';
import { BaseEntity } from '@Model/base.entity';

@Entity({ name: 'Location' })
export class Location extends BaseEntity {
   @Column({ nullable: false })
   name: string;

   @Column({ nullable: false })
   description: string;

   @Column({ nullable: true })
   website: string;

   @Column({ nullable: false })
   phone: string;

   @Column({ nullable: true })
   contact_persion: string;

   @Column({ nullable: true, default: false })
   center_location: boolean;

   @Column({ nullable: false, type: 'decimal' })
   lon: number;

   @Column({ nullable: false, type: 'decimal' })
   lat: number;

   toJSON() {
      return classToPlain(this);
   }
}
