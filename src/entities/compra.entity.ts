import { Column, Double, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Detalle_Compra } from "./detalle_compra.entity";
import { Detalle_Venta } from "./detalle_venta.entity";
import { Producto } from "./producto.entity";
import { Proveedor } from "./proveedor.entity";


@Entity()
export class Compra{

    @PrimaryColumn()
    id:number;

    @Column({type:'int'})
    id_user:number;

    @Column({type:'varchar', length:(15)})
    nfactura:string

    @Column({type:'boolean'})
    estado:boolean

    @Column({type:'date'})
    date:Date

    @Column({type:'float'})
    total:number

       //la relacion de un venta tiene muchos detalles_ventas
     @OneToMany(()=> Detalle_Compra, (detalle_compra:Detalle_Compra)=> detalle_compra.compra)
     detalle_compra: Detalle_Compra[]

     @ManyToOne(()=>Proveedor, (proveedor: Proveedor)=>proveedor.compra)
     proveedor:Proveedor
}