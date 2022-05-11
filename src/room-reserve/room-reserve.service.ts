import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoomReserveDto } from './dto/create-room-reserve.dto';
import { UpdateRoomReserveDto } from './dto/update-room-reserve.dto';
import { RoomReserve, RoomReserveDocument } from './entities/room-reserve.entity';

@Injectable()
export class RoomReserveService {
  constructor(@InjectModel(RoomReserve.name) private roomReserveModel: Model<RoomReserveDocument>) { }

  async create(createRoomReserveDto: CreateRoomReserveDto): Promise<RoomReserve> {
    const createRoomService = new this.roomReserveModel(createRoomReserveDto);
    return createRoomService.save();
  }

  async findAll(): Promise<RoomReserve[]> {
    return this.roomReserveModel.find().exec();
  }

  async findOne(id: string): Promise<RoomReserve> {
    return this.roomReserveModel.findById(id);
  }
  async update(id: string, updateRoomReserveDto: UpdateRoomReserveDto): Promise<RoomReserve> {
    return this.roomReserveModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateRoomReserveDto },
      { new: true }
    );
  }

  remove(id: string) {
    return this.roomReserveModel.deleteOne(
      {
        _id: id
      }).exec();
  }
}
