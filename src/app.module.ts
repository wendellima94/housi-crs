import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomReserveModule } from './room-reserve/room-reserve.module';
import { MongooseModule } from '@nestjs/mongoose';

const mongoUri = 'mongodb+srv://house-project:cgzTJug6z34xszSM@cluster0.kdyse.mongodb.net/test';

@Module({
  imports: [
    MongooseModule.forRoot(mongoUri),
    RoomReserveModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
