import { type } from "os";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Producto } from "./producto.entity";

@Entity()
export class Category{

    @PrimaryColumn()
    id:number

    @Column({type:'varchar'})
    name: string;

    @OneToMany(()=> Producto, (producto: Producto)=> producto.category)
    producto: Category[]

}