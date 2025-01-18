/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Length, Min, Max, IsLowercase, IsArray } from "class-validator";
import { BrandEntity } from "./brand.entity";
import { CategoryEntity } from "./category.entity";

@Entity()
export class ProductEntity {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   @Length(3, 100, { message: "To Short Title" })
   title: string;

   @Column({ unique: true })
   @IsLowercase()
   slug: string;

   @Column()
   @Length(20)
   description: string;

   @Column({ type: "float", nullable: true })
   priceAfterDiscount: number;

   @Column("simple-array", { nullable: true })
   @IsArray()
   colors: string[];

   @Column("simple-array", { nullable: true })
   @IsArray()
   images: string[];

   @Column()
   imageCovered: string;

   @ManyToOne(() => CategoryEntity, category => category.id, { nullable: false })
   category: CategoryEntity;

   // @ManyToOne(() => Repository, repository => repository.products, { nullable: true })
   // repoInfo: Repository;

   @ManyToOne(() => BrandEntity, brand => brand.id, { nullable: true })
   brand: BrandEntity;

   @Column({ type: "float", default: 0 })
   @Min(0, { message: "Rating Must be above or equal 0" })
   @Max(5, { message: "Rating Must be below or equal 5" })
   ratingsAverage: number;

   @Column({ type: "int", default: 0 })
   ratingsQuantity: number;
}
