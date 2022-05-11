import { Module } from '@nestjs/common';
import { RoomReserveService } from './room-reserve.service';
import { RoomReserveController } from './room-reserve.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomReserve, RoomReserveSchema } from './entities/room-reserve.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: RoomReserve.name, schema: RoomReserveSchema }])],
  controllers: [RoomReserveController],
  providers: [RoomReserveService]
})
export class RoomReserveModule { }
