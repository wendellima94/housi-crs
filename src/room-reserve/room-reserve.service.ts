import { Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { convertDate } from 'src/middleware/convertDate';
import { CreateRoomReserveDto } from './dto/create-room-reserve.dto';
import { UpdateRoomReserveDto } from './dto/update-room-reserve.dto';
import { RoomReserve, RoomReserveDocument } from './entities/room-reserve.entity';

@Injectable()
export class RoomReserveService {
  constructor(@InjectModel(RoomReserve.name) private roomReserveModel: Model<RoomReserveDocument>) { }

  async create(createRoomReserveDto: CreateRoomReserveDto): Promise<RoomReserve> {
    const resDb = await this.roomReserveModel.find().exec()

    const checkInDtoValue = createRoomReserveDto.checkIn;
    const apartmentNameDtoValue = createRoomReserveDto.apartmentName;

    const responseDate = resDb.map((a) => {
      return a.checkIn
    })

    const responseApartmentName = resDb.map((a) => {
      return a.apartmentName;
    })

    let resultDate;
    let resultApartmentName;

    try {
      responseDate.filter((resDate) => resultDate = resDate)
      responseApartmentName.filter((resApartmentName) => resultApartmentName = resApartmentName)
    } catch (e) {
      console.log(e)
    }

    let compareApartmentDb = convertDate(checkInDtoValue) + apartmentNameDtoValue;
    let compareDateDto = convertDate(resultDate) + resultApartmentName;

    if (compareApartmentDb === compareDateDto) {
      console.error("Quarto reservado")
    } else {
      console.log("quarto livre nas datas")
      const createRoomService = new this.roomReserveModel(createRoomReserveDto);
      return await createRoomService.save();
    }
    return;
  }

  async findByCheckIn(checkIn: Date): Promise<RoomReserve> {
    return this.roomReserveModel.findOne(checkIn).exec()
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
