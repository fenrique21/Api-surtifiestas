import { type } from "os";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./producto.entity";

@Entity()
export class Category{

    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'varchar'})
    category: string;

    @OneToMany(()=> Producto, (producto: Producto)=> producto.category)
    producto: Category[] 

}