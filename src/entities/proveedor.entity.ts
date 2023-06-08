import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Compra } from "./compra.entity";

@Entity()
export class Proveedor{
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'varchar'})
    name:string;

    @Column({type:'varchar',length:(6)})
    code:string

    @Column({type:'varchar', nullable:true})
    telefono:string

    @Column({type:'varchar',length:(120)})
    direction:string


    //la relacion de un venta tiene muchos detalles_ventas
    @OneToMany(()=> Compra, (compra:Compra)=> compra.proveedor)
    compra:Compra[]

}