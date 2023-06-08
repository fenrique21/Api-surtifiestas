import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Category } from "./category.entity";
import { Detalle_Venta } from "./detalle_venta.entity";
import { Precio } from "./precio.entity";

@Entity()
export class Producto{
    @PrimaryGeneratedColumn()
    id:number

    @Column({type: 'varchar'})
    name:string

    @Column({type: 'varchar', nullable:true})
    codigo:string
    
    @Column({type:'int'})
    cantidad:number

    @Column({type:'int'})
    idcategory:number


    //La relacion de muchos productos tienen una categoria
    @ManyToOne(()=>Category,(category: Category) => category.producto)
    category:Category

    //la relacion de un producto tiene muchos precios
    @OneToMany(()=> Precio, (precio: Precio)=> precio.producto)
    precio: Producto[]

     //la relacion de un producto tiene muchos ventas
     @OneToMany(()=> Detalle_Venta, (detalle_venta:Detalle_Venta)=> detalle_venta.venta)
     detalle_venta: Producto[]
}