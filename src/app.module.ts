import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './module/user.module';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [ConfigModule.forRoot(), SequelizeModule.forRoot(databaseConfig), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
