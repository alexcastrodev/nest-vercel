import { Module } from "@nestjs/common";
import { userProviders } from "../providers/user.providers";
import { UserController } from "../controller/user.controller";
import { User } from "../entities/user.entity";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
    imports: [SequelizeModule.forFeature([User])],
    controllers: [UserController],
    providers: [
        ...userProviders
    ]
})
export class UserModule {}