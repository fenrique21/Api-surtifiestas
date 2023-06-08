import { Column, Double, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./producto.entity";
import { Venta } from "./venta.entity";

@Entity()
export class Detalle_Venta{
    
    @PrimaryGeneratedColumn()
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
     @ManyToOne(()=>Venta,(venta: Venta) => venta.detalle_venta)
     venta:Venta

      //La relacion de muchos detalles de ventas tienen un producto
      @ManyToOne(()=>Producto,(producto: Producto) => producto.detalle_venta)
      producto:Producto
}