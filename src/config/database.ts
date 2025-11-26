import { SequelizeModuleOptions } from "@nestjs/sequelize"
import { User } from "../entities/user.entity"
import * as dotenv from "dotenv"
dotenv.config();

export const databaseConfig: SequelizeModuleOptions = {
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST || '',
    port: Number(process.env.POSTGRES_PORT || 5432),
    username: process.env.POSTGRES_USER || '',
    password: process.env.POSTGRES_PASSWORD || '',
    database: process.env.POSTGRES_DB || '',
    models: [User],
    synchronize: true,
    autoLoadModels: true
}