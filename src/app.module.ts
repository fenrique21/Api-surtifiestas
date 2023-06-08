import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoriasController } from './controller/categorias.controller';
import { ComprasController } from './controller/compras.controller';
import { DetalleComprasController } from './controller/detalle-compras.controller';
import { DetalleVentasController } from './controller/detalle-ventas.controller';
import { PreciosController } from './controller/precios.controller';
import { ProductosController } from './controller/productos.controller';
import { ProveedoresController } from './controller/proveedores.controller';
import { VentasController } from './controller/ventas.controller';
import { Category } from './entities/category.entity';
import { Compra } from './entities/compra.entity';
import { Detalle_Compra } from './entities/detalle_compra.entity';
import { Detalle_Venta } from './entities/detalle_venta.entity';
import { Precio } from './entities/precio.entity';
import { Producto } from './entities/producto.entity';
import { Proveedor } from './entities/proveedor.entity';
import { Venta } from './entities/venta.entity';
import { CategoriasService } from './service/categorias.service';
import { ComprasService } from './service/compras.service';
import { DetalleComprasService } from './service/detalle-compras.service';
import { DetalleVentasService } from './service/detalle-ventas.service';
import { PreciosService } from './service/precios.service';
import { ProductosService } from './service/productos.service';
import { ProveedoresService } from './service/proveedores.service';
import { VentasService } from './service/ventas.service';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        // entities: [join(__dirname, 'entities/**')],
        autoLoadEntities: true,
        synchronize: false,
      }
      )
    }),
    TypeOrmModule.forFeature([Producto,Precio,Detalle_Compra,Detalle_Venta,Venta,Compra,Proveedor,Category]),
    UserModule,
    AuthModule,
  ],
  controllers: [
    AppController,
    ProductosController,
    PreciosController,
    DetalleComprasController,
    DetalleVentasController,
    VentasController,
    ComprasController,
    CategoriasController,
    ProveedoresController
  ],
  providers: 
  [AppService,
    ProductosService,
    PreciosService,
    DetalleComprasService,
    DetalleVentasService,
    VentasService,
    ComprasService,
    CategoriasService,
    ProveedoresService
  ],
})
export class AppModule { }