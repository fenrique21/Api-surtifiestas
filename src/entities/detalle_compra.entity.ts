import { Column, Double, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Compra } from "./compra.entity";
import { Producto } from "./producto.entity";
import { Venta } from "./venta.entity";

@Entity()
export class Detalle_Compra{

    @PrimaryColumn()
    id:number 

    @Column({type:'int'})
    id_producto:number

    @Column({type:'int'})
    id_venta:number

    @Column({type:'int'})
    cantidad:number

    @Column({type:'float'})
    precio:number

     //La relacion de muchos detalles de ventas tienen un venta
     @ManyToOne(()=>Compra,(compra: Compra) => compra.detalle_compra)
     compra:Compra

      //La relacion de muchos detalles de ventas tienen un producto
      @ManyToOne(()=>Producto,(producto: Producto) => producto.detalle_venta)
      producto:Producto
}