import {config} from "dotenv"
import { DataSource } from "typeorm"

config({path:'.env.local'});
export const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    entities:['src/entities/*.entity.ts'],
    migrations:['src/migrations/*.ts']
})