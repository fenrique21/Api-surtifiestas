import { Column, Double, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Detalle_Venta } from "./detalle_venta.entity";
import { Producto } from "./producto.entity";


@Entity()
export class Venta{

  @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'int'})
    id_user:number;

    @Column({type:'boolean'})
    estado:boolean

    @Column({type:('varchar'),length:'80', nullable:true})
    name_cliente:string;

    @Column({type:'date'})
    date:Date

    @Column({type:'float'})
    total:number

       //la relacion de un venta tiene muchos detalles_ventas
     @OneToMany(()=> Detalle_Venta, (detalle_venta:Detalle_Venta)=> detalle_venta.venta)
     detalle_venta: Detalle_Venta[]
}