import { Column, Double, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./producto.entity";

@Entity()
export class Precio{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({type:'float'})
    preciounidad:number

    @Column({type:'float', nullable:true})
    preciociento:number

    @Column({type:'float', nullable:true})
    preciomillar:number

    //LA relacion de muchos precios tienen un producto
    @ManyToOne(()=>Producto,(producto: Producto) => producto.precio)
    producto:Producto
}